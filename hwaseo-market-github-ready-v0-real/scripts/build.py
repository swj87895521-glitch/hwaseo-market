from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
TEMPLATE = SRC / 'template.html'
OUTPUT = SRC / 'index.html'
SECTIONS = ['header', 'banner', 'products', 'news', 'footer']


def build() -> None:
    template = TEMPLATE.read_text(encoding='utf-8')
    html = template
    for name in SECTIONS:
        placeholder = f'{{{{ {name} }}}}'
        section_path = SRC / 'sections' / f'{name}.html'
        section_html = section_path.read_text(encoding='utf-8').strip()
        if placeholder not in html:
            raise ValueError(f'Placeholder not found in template: {placeholder}')
        html = html.replace(placeholder, section_html)

    OUTPUT.write_text(html, encoding='utf-8')
    print(f'Built: {OUTPUT}')


if __name__ == '__main__':
    build()
