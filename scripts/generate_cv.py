"""Genera los CV (ES y EN) en public/ con banda gris, secciones y etiquetas redondeadas. El contenido replica src/data/portfolio.ts.
A4, una página, texto seleccionable (compatible con ATS).
Uso: python3 scripts/generate_cv.py   (requiere: pip install reportlab)
Mantén este contenido alineado con src/data/portfolio.ts."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Flowable

M = 14 * mm
INK, MUTED, BAND, LINE = (colors.HexColor(c) for c in ("#2d3340", "#6b7280", "#dcdcdc", "#7a7f8a"))
GH, SITE, MAIL = "https://github.com/angelc-hub", "https://angelc-hub.github.io", "cj_angel@outlook.com"

base = ParagraphStyle("b", fontName="Helvetica", fontSize=9.3, leading=12.8, textColor=INK)
name = ParagraphStyle("n", parent=base, fontName="Helvetica-Bold", fontSize=20, leading=24)
small = ParagraphStyle("s", parent=base, fontSize=8.8, textColor=INK)
muted = ParagraphStyle("m", parent=base, textColor=MUTED, fontSize=9)
title = ParagraphStyle("t", parent=base, fontName="Helvetica-Bold", fontSize=13.5, leading=17, spaceBefore=14, spaceAfter=5)
h2 = ParagraphStyle("h", parent=base, fontName="Helvetica-Bold", fontSize=13, leading=16, spaceBefore=17, spaceAfter=6)
lab = ParagraphStyle("l", parent=base, fontName="Helvetica-Bold", fontSize=8.6, leading=11, spaceBefore=5, spaceAfter=3)
bul = ParagraphStyle("bl", parent=base, leftIndent=10, bulletIndent=0, bulletFontSize=11, bulletColor=LINE, spaceAfter=1.5)

class Pills(Flowable):
    """Etiquetas redondeadas que se ajustan en varias líneas (el texto sigue siendo texto)."""
    H, GAP, ROW, PAD, SZ = 17, 6, 6, 9, 8.6
    def __init__(self, items): super().__init__(); self.items = items
    def wrap(self, aw, ah):
        x = y = 0; self.pos = []
        for t in self.items:
            w = stringWidth(t, "Helvetica", self.SZ) + 2 * self.PAD
            if x and x + w > aw: x, y = 0, y + 1
            self.pos.append((x, y, w, t)); x += w + self.GAP
        rows = y + 1
        self.height = rows * self.H + (rows - 1) * self.ROW
        return aw, self.height
    def draw(self):
        c = self.canv; c.setStrokeColor(LINE); c.setLineWidth(.7); c.setFillColor(INK); c.setFont("Helvetica", self.SZ)
        for x, r, w, t in self.pos:
            yb = self.height - (r + 1) * self.H - r * self.ROW
            c.roundRect(x, yb, w, self.H, self.H / 2, stroke=1, fill=0)
            c.drawString(x + self.PAD, yb + 5.4, t)

def b(t): return Paragraph(t, bul, bulletText="•")

def tech(es, en=None, learn=False): return (es, en or es, learn)
GROUPS = [
 ("Backend Development", "Backend Development", [tech("Java"), tech("Spring Boot"), tech("Node.js"), tech("Express.js"), tech("Python"), tech("Django"), tech("FastAPI"), tech("REST API"), tech("Arquitectura backend", "Backend architecture", True), tech("POO", "OOP")]),
 ("Bases de datos", "Databases", [tech("PostgreSQL"), tech("MySQL"), tech("SQLite"), tech("MongoDB")]),
 ("Data Science & AI", "Data Science & AI", [tech("Python para datos", "Python for data"), tech("Pandas"), tech("NumPy"), tech("Visualización de datos", "Data visualization"), tech("Análisis exploratorio", "Exploratory analysis"), tech("Preparación de datos", "Data preparation"), tech("Machine Learning", None, True), tech("Inteligencia Artificial", "Artificial Intelligence", True)]),
 ("Tools & Development", "Tools & Development", [tech("Git"), tech("GitHub"), tech("Docker", None, True), tech("Linux"), tech("Postman"), tech("VS Code"), tech("IntelliJ IDEA")]),
]
SOFT = [("Trabajo en equipo", "Teamwork"), ("Resolución de problemas", "Problem solving"), ("Adaptabilidad", "Adaptability"), ("Aprendizaje continuo", "Continuous learning"), ("Comunicación", "Communication"), ("Organización", "Organization"), ("Pensamiento crítico", "Critical thinking"), ("Responsabilidad", "Responsibility"), ("Creatividad", "Creativity"), ("Gestión del tiempo", "Time management")]
INTERESTS = ["Backend Engineering", "Software Architecture", "API Development", "Data Science", "Artificial Intelligence", "Machine Learning", "Automation", "Cloud Computing"]
# Proyectos reales: agrega aquí cuando existan, p. ej. ("Nombre", "Descripción", "Tecnologías"). Vacío = no se muestra la sección.
PROJECTS = []

T = {
 "es": dict(i=0, out="public/Jose_Angel_Condori_Ccapa_CV.pdf", loc="Puno, Perú", port="Portafolio", learn="aprendiendo",
  summary="Estudiante de décimo ciclo de Ingeniería de Sistemas, orientado al desarrollo Backend: diseño de APIs REST, aplicaciones web y soluciones basadas en datos. Trabajo con Java (Spring Boot), Node.js (Express) y Python (Django, FastAPI). Me interesan la arquitectura de software, las buenas prácticas, la automatización y el aprendizaje de Machine Learning. Busco una oportunidad donde aportar, seguir creciendo y construir soluciones útiles.",
  h=dict(sum="Perfil profesional", edu="Formación académica", stack="Stack tecnológico", proj="Proyectos", soft="Habilidades blandas", int="Intereses profesionales", lang="Idiomas"),
  edu=("Universidad Peruana Unión", "Ingeniería de Sistemas", "En curso · Décimo ciclo"), langs=["Español - Nativo", "Inglés - Intermedio"]),
 "en": dict(i=1, out="public/Jose_Angel_Condori_Ccapa_CV_EN.pdf", loc="Puno, Peru", port="Portfolio", learn="learning",
  summary="Tenth-semester Systems Engineering student focused on Backend development: REST API design, web applications and data-driven solutions. I work with Java (Spring Boot), Node.js (Express) and Python (Django, FastAPI). I am interested in software architecture, good engineering practices, automation and learning Machine Learning. I am looking for an opportunity to contribute, keep growing and build useful solutions.",
  h=dict(sum="Professional summary", edu="Education", stack="Tech stack", proj="Projects", soft="Soft skills", int="Professional interests", lang="Languages"),
  edu=("Universidad Peruana Unión", "Systems Engineering", "In progress · Tenth semester"), langs=["Spanish - Native", "English - Intermediate"]),
}

for code, c in T.items():
    i, H = c["i"], c["h"]
    band = Table([[[Paragraph("Jose Angel Condori Ccapa", name), Paragraph(c["loc"], small), Spacer(1, 7),
        Paragraph(f'<link href="mailto:{MAIL}" color="#2d3340">{MAIL}</link> &nbsp;&nbsp;|&nbsp;&nbsp; +51 930 911 491 &nbsp;&nbsp;|&nbsp;&nbsp; '
                  f'GitHub: <link href="{GH}" color="#2d3340">{GH}</link>', small),
        Paragraph(f'{c["port"]}: <link href="{SITE}" color="#2d3340">{SITE}</link>', small)]]], colWidths=[A4[0] - 2 * M])
    band.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), BAND), ("LEFTPADDING", (0, 0), (-1, -1), 18),
                              ("TOPPADDING", (0, 0), (-1, -1), 18), ("BOTTOMPADDING", (0, 0), (-1, -1), 14)]))
    s = [band, Paragraph("Backend Developer | Software Developer | Data Science &amp; AI Enthusiast", title)]
    s += [Paragraph(H["sum"], h2), Paragraph(c["summary"], base)]
    s += [Paragraph(H["edu"], h2), Paragraph(f'<b>{c["edu"][0]}</b>', base), Paragraph(c["edu"][1], muted), Paragraph(c["edu"][2], muted)]
    s.append(Paragraph(H["stack"], h2))
    for g in GROUPS:
        s += [Paragraph(g[i], lab), Pills([(t[i] + (f' ({c["learn"]})' if t[2] else '')) for t in g[2]])]
    if PROJECTS:
        s.append(Paragraph(H["proj"], h2)); s += [b(f"<b>{n}</b> — {d} ({t})") for n, d, t in PROJECTS]
    s += [Paragraph(H["soft"], h2), Pills([x[i] for x in SOFT])]
    s += [Paragraph(H["int"], h2), Pills(INTERESTS)]
    s += [Paragraph(H["lang"], h2), Pills(c["langs"])]
    SimpleDocTemplate(c["out"], pagesize=A4, leftMargin=M, rightMargin=M, topMargin=M, bottomMargin=M,
        title="CV - Jose Angel Condori Ccapa", author="Jose Angel Condori Ccapa", subject="Backend Developer").build(s)
    print("OK", c["out"])
