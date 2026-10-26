"""Print-ready A4 cover for the Yara Global Express company profile."""

from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent
HERO = ROOT / "02-images" / "cover-hero.png"
LOGO = ROOT / "02-images" / "yara-logo.webp"
QR = ROOT / "02-images" / "website-qr.png"
OUT = ROOT / "01-pages" / "01-cover" / "cover.png"
FINAL = ROOT / "03-final" / "Yara-Global-Express-Cover.png"

W, H = 2480, 3508
TEAL = (26, 131, 147)
PURPLE = (102, 49, 147)
MID = (77, 75, 149)
NAVY = (10, 34, 64)
INK = (12, 32, 58)
WHITE = (255, 255, 255)

FONT_B = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SB = "C:/Windows/Fonts/seguisb.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def vertical_gradient(size, top, bottom):
    image = Image.new("RGB", size)
    draw = ImageDraw.Draw(image)
    for y in range(size[1]):
        draw.line([(0, y), (size[0], y)], fill=lerp(top, bottom, y / max(size[1] - 1, 1)))
    return image


def horizontal_gradient(size, stops):
    image = Image.new("RGB", size)
    draw = ImageDraw.Draw(image)
    for x in range(size[0]):
        t = x / max(size[0] - 1, 1)
        color = lerp(stops[0], stops[1], t / 0.5) if t < 0.5 else lerp(stops[1], stops[2], (t - 0.5) / 0.5)
        draw.line([(x, 0), (x, size[1])], fill=color)
    return image


def text_width(draw, text, face):
    box = draw.textbbox((0, 0), text, font=face)
    return box[2] - box[0]


def text_height(draw, text, face):
    box = draw.textbbox((0, 0), text, font=face)
    return box[3] - box[1]


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=255)
    return mask


def ramp(size, start, end):
    mask = Image.new("L", size, 255)
    draw = ImageDraw.Draw(mask)
    span = max(end - start, 1)
    for y in range(start):
        draw.line([(0, y), (size[0], y)], fill=0)
    for y in range(start, end):
        draw.line([(0, y), (size[0], y)], fill=int(255 * (y - start) / span))
    return mask


def draw_document(draw, cx, cy, color):
    draw.rounded_rectangle((cx - 28, cy - 36, cx + 28, cy + 36), 6, outline=color, width=5)
    for i in range(3):
        y = cy - 14 + i * 16
        draw.line((cx - 16, y, cx + 16, y), fill=color, width=4)


def draw_box(draw, cx, cy, color):
    draw.line((cx - 38, cy - 12, cx, cy - 32, cx + 38, cy - 12, cx, cy + 8, cx - 38, cy - 12), fill=color, width=5)
    draw.line((cx - 38, cy - 12, cx - 38, cy + 28, cx, cy + 46), fill=color, width=5)
    draw.line((cx + 38, cy - 12, cx + 38, cy + 28, cx, cy + 46), fill=color, width=5)
    draw.line((cx, cy + 8, cx, cy + 46), fill=color, width=5)


def draw_bolt(draw, cx, cy, color):
    draw.polygon(
        [
            (cx + 8, cy - 42),
            (cx - 20, cy + 2),
            (cx - 2, cy + 2),
            (cx - 12, cy + 42),
            (cx + 22, cy - 4),
            (cx + 2, cy - 4),
        ],
        fill=color,
    )


def draw_globe(draw, cx, cy, color):
    draw.ellipse((cx - 34, cy - 34, cx + 34, cy + 34), outline=color, width=5)
    draw.ellipse((cx - 16, cy - 34, cx + 16, cy + 34), outline=color, width=4)
    draw.arc((cx - 34, cy - 12, cx + 34, cy + 12), 0, 360, fill=color, width=4)


def main():
    canvas = vertical_gradient((W, H), (206, 226, 236), (132, 176, 202)).convert("RGBA")
    canvas.paste(horizontal_gradient((W, 18), (TEAL, MID, PURPLE)), (0, 0))
    draw = ImageDraw.Draw(canvas)

    logo = Image.open(LOGO).convert("RGBA").resize((280, 280), Image.Resampling.LANCZOS)
    canvas.paste(logo, (150, 128), logo)
    draw.rounded_rectangle((468, 150, 476, 390), 4, fill=WHITE)

    draw.text((520, 145), "YARA", font=font(FONT_B, 86), fill=NAVY)
    draw.text((520, 245), "GLOBAL EXPRESS LTD.", font=font(FONT_B, 48), fill=INK)
    draw.text((520, 318), "AN WORLDWIDE COURIER SERVICES", font=font(FONT_SB, 30), fill=PURPLE)

    pill_w, pill_h = 1560, 108
    pill_x, pill_y = (W - pill_w) // 2, 470
    pill = horizontal_gradient((pill_w, pill_h), (TEAL, MID, PURPLE))
    canvas.paste(pill, (pill_x, pill_y), rounded_mask((pill_w, pill_h), 54))
    pill_font = font(FONT_B, 40)
    label = "AN WORLDWIDE COURIER SERVICES"
    draw.text(
        (pill_x + (pill_w - text_width(draw, label, pill_font)) / 2, pill_y + 28),
        label,
        font=pill_font,
        fill=WHITE,
    )

    head = font(FONT_B, 84)
    line1 = "Connecting Businesses"
    line2 = "to the World"
    draw.text(((W - text_width(draw, line1, head)) / 2, 620), line1, font=head, fill=NAVY)
    draw.text(((W - text_width(draw, line2, head)) / 2, 720), line2, font=head, fill=PURPLE)

    hero = Image.open(HERO).convert("RGBA")
    hero_w, hero_h = W - 160, 1680
    scale = max(hero_w / hero.width, hero_h / hero.height)
    resized = hero.resize((round(hero.width * scale), round(hero.height * scale)), Image.Resampling.LANCZOS)
    left = max((resized.width - hero_w) // 2, 0)
    top = max((resized.height - hero_h) // 2 - 40, 0)
    hero = resized.crop((left, top, left + hero_w, top + hero_h))
    hx, hy = 80, 900

    shadow = Image.new("RGBA", (hero_w, hero_h), (0, 0, 0, 0))
    shadow.putalpha(rounded_mask((hero_w, hero_h), 48))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    tint = Image.new("RGBA", shadow.size, (8, 24, 48, 110))
    tint.putalpha(shadow.getchannel("A"))
    canvas.alpha_composite(tint, (hx + 18, hy + 28))

    photo = Image.new("RGBA", (hero_w, hero_h), (0, 0, 0, 0))
    photo.paste(hero, (0, 0))
    alpha = ImageChops.multiply(rounded_mask((hero_w, hero_h), 48), ramp((hero_w, hero_h), 0, 100))
    photo.putalpha(alpha)
    canvas.alpha_composite(photo, (hx, hy))

    footer_top = hy + hero_h - 40
    footer_h = H - footer_top
    footer = horizontal_gradient((W, footer_h), ((18, 110, 132), MID, PURPLE)).convert("RGBA")
    footer_mask = Image.new("L", (W, footer_h), 0)
    ImageDraw.Draw(footer_mask).rounded_rectangle((-80, 48, W + 80, footer_h + 80), 90, fill=255)
    footer_mask = ImageChops.multiply(footer_mask, ramp((W, footer_h), 0, 70))
    footer.putalpha(footer_mask)
    canvas.alpha_composite(footer, (0, footer_top))

    services = [
        ("CUSTOMS\nCLEARANCE", draw_document),
        ("PICKUP & DELIVERY\nSERVICE", draw_box),
        ("EXPRESS\nDELIVERY", draw_bolt),
        ("GLOBAL\nNETWORK", draw_globe),
    ]
    icon_y = footer_top + 190
    label_font = font(FONT_B, 26)
    for index, (caption, painter) in enumerate(services):
        cx = 210 + index * 430
        circle = Image.new("RGBA", (160, 160), (0, 0, 0, 0))
        ImageDraw.Draw(circle).ellipse((4, 4, 155, 155), outline=WHITE, width=4)
        canvas.alpha_composite(circle, (cx - 80, icon_y - 80))
        icon = Image.new("RGBA", (160, 160), (0, 0, 0, 0))
        painter(ImageDraw.Draw(icon), 80, 82, WHITE)
        canvas.alpha_composite(icon, (cx - 80, icon_y - 80))
        yy = icon_y + 108
        for line in caption.split("\n"):
            draw.text((cx - text_width(draw, line, label_font) / 2, yy), line, font=label_font, fill=WHITE)
            yy += 36

    qr = Image.open(QR).convert("RGBA").resize((280, 280), Image.Resampling.NEAREST)
    card = Image.new("RGBA", (360, 360), WHITE)
    card_mask = rounded_mask((360, 360), 32)
    card.putalpha(card_mask)
    card.paste(qr, (40, 40), qr)
    canvas.alpha_composite(card, (W - 480, icon_y - 130))
    scan = font(FONT_B, 28)
    scan_text = "Scan for Website"
    draw.text(
        (W - 300 - text_width(draw, scan_text, scan) / 2, icon_y + 250),
        scan_text,
        font=scan,
        fill=WHITE,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb = canvas.convert("RGB")
    rgb.save(OUT, "PNG", optimize=True)
    rgb.save(FINAL, "PNG", optimize=True)
    print(f"{OUT} {rgb.size}")


if __name__ == "__main__":
    main()
