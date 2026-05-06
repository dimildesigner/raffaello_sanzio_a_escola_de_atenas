# A Escola de Atenas — Experiência Digital Interativa

> Uma exposição digital imersiva sobre o afresco renascentista de Rafael Sanzio (1509–1511), construída com HTML, CSS e JavaScript puros.

![Preview](escola_de_atenas_color_completa.jpg)

---

## Sobre o Projeto

Este projeto é uma experiência de **scroll-driven storytelling** inspirada nas grandes exposições digitais de museus e nos especiais interativos do *New York Times*. O objetivo é apresentar *A Escola de Atenas* não apenas como uma obra de arte, mas como uma narrativa viva — filosófica, histórica e surpreendentemente contemporânea.

A experiência guia o visitante por 9 seções, desde a vida de Rafael Sanzio até a conexão inesperada entre o afresco renascentista e as capas dos álbuns *Use Your Illusion* do **Guns N' Roses** (1991).

---

## Demo

Abra o arquivo `escola_de_atenas.html` diretamente no navegador — sem servidor, sem dependências externas.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/escola-de-atenas.git

# Entre na pasta
cd escola-de-atenas

# Abra no navegador (macOS)
open escola_de_atenas.html

# Abra no navegador (Linux)
xdg-open escola_de_atenas.html

# Abra no navegador (Windows)
start escola_de_atenas.html
```

---

## Estrutura do Projeto

```
escola-de-atenas/
│
├── escola_de_atenas.html               ← Arquivo principal (tudo em um único HTML)
│
├── escola_de_atenas_color.png          ← Obra principal (versão recortada)
├── escola_de_atenas_color_completa.jpg ← Obra completa com moldura
├── escola-de-atenas-arquitetura.png    ← Análise da composição geométrica
├── escola_de_atenas_rascunho.jpg       ← Cartão preparatório completo
├── escola_de_atenas_rascunho1.jpg      ← Detalhe do rascunho — grupo central
├── escola_de_atenas_rascunho2.jpg      ← Detalhe do rascunho — grupo direito
├── escola_de_atenas_rascunho3.jpg      ← Detalhe do rascunho — grupo esquerdo
│
├── Raffaello_Sanzio.jpg                ← Autorretrato de Rafael
├── vaticano_externo.jpg                ← Basílica de São Pedro
├── vaticano_interno_stanza_della_segnatura.jpg ← A Stanza della Segnatura
│
├── renascimento_contemporaneo.jpg      ← Detalhe usado por Mark Kostabi
├── guns_use_your_illusion-I.jpeg       ← Capa do álbum Vol. I — Guns N' Roses
├── guns_use_your_illusion-II.jpeg      ← Capa do álbum Vol. II — Guns N' Roses
│
├── filosofos_01_platao.png             ┐
├── filosofos_02_aristoteles.png        │
├── filosofos_03_diogenes.png           │
├── filosofos_04_heraclito.png          │
├── filosofos_05_socrates.png           │  PNGs dos filósofos com fundo preto
├── filosofos_06_alexandre.png          │  (renderizados via mix-blend-mode: screen)
├── filosofos_07_pitagoras.png          │
├── filosofos_08_epicuro.png            │
├── filosofos_09_euclides.png           │
├── filosofos_10_ptolomeu.png           │
└── filosofos_11_zoroastro.png          ┘
```

---

## Funcionalidades

### Navegação & Interface
- **Cursor personalizado** com trail fluido
- **Barra de progresso** global (scroll 0→100%)
- **Navegação por âncoras** com scroll suave entre seções
- **Animações de entrada** via Intersection Observer (fade + translateY)

### Seção dos Filósofos — Mecânica Principal
- Pintura em cores por padrão
- Ao selecionar um filósofo, a pintura transita para **preto e branco**
- O **PNG do filósofo** — posicionado com coordenadas calculadas pixel a pixel — surge sobre a pintura via `mix-blend-mode: screen`
- **Spotlight** radial dourado ilumina a região exata do personagem
- **Painel informativo** com nome, datas, descrição e posição na obra
- **Navegação por teclado**: `→` próximo · `←` anterior · `Esc` para resetar
- Clicar no mesmo filósofo ativo **desativa** e restaura a cor original

### Seção Contemporaneidade (Guns N' Roses)
- Apresentação em **3 atos**: detalhe original → destaque das figuras → comparativo
- Efeito de **reveal progressivo** acionado por botão
- Comparativo lado a lado: afresco original + capas Vol. I e Vol. II
- Barra de dados: designer, ano, cópias vendidas, distância temporal

---

## Seções

| # | Seção | Descrição |
|---|-------|-----------|
| 01 | Rafael Sanzio | Vida e contexto do pintor |
| 02 | Vaticano | A Stanza della Segnatura |
| 03 | A Obra | Visão geral do afresco |
| 04 | Arquitetura | Geometria e perspectiva da composição |
| 05 | Rascunhos | Cartão preparatório (Pinacoteca Ambrosiana, Milão) |
| 06 | Filósofos | **Seção principal interativa** — 11 personagens |
| 07 | Curiosidades | Autorretrato, anacronismos e segredos da obra |
| 08 | Contemporaneidade | Guns N' Roses e Mark Kostabi |
| 09 | Legado | Reflexão final |

---

## Stack Técnica

| Recurso | Implementação |
|---------|--------------|
| Linguagem | HTML5 + CSS3 + JavaScript ES6 (vanilla) |
| Animações | CSS transitions + `requestAnimationFrame` |
| Scroll | `IntersectionObserver` API + scroll event passivo |
| Imagens | `mix-blend-mode: screen` para remoção de fundo preto |
| Fontes | Google Fonts — Cinzel · Cormorant Garamond · IM Fell English |
| Cursor | Custom cursor com trail via `requestAnimationFrame` |
| Build | Zero dependências — nenhum bundler, nenhum framework |

---

## Decisões Técnicas

**Por que `mix-blend-mode: screen` nos filósofos?**
Os PNGs dos filósofos têm fundo preto (não transparente). O modo de mesclagem `screen` trata o preto como transparente matematicamente — qualquer pixel preto (0,0,0) desaparece, e os pixels coloridos do personagem se sobrepõem à pintura. Resultado: posicionamento perfeito sem precisar reexportar os arquivos com canal alpha.

**Por que coordenadas percentuais calculadas via Python?**
Todos os PNGs têm dimensões idênticas (1800×1319px), iguais à pintura base. Um script analisou os bounding boxes dos pixels não-pretos em cada arquivo para extrair o centro exato de cada personagem como porcentagem da imagem. Isso garante que os hotspots (marcadores dourados) estejam posicionados com precisão sobre cada figura na pintura, independente do tamanho de tela.

---

## Contexto Histórico

*A Escola de Atenas* é um afresco pintado por Raffaello Sanzio entre 1509 e 1511 na *Stanza della Segnatura*, nos aposentos privados do Papa Júlio II no Vaticano. Com 500 × 770 cm, a obra reúne mais de 50 figuras representando os maiores pensadores da Antiguidade — com rostos de contemporâneos de Rafael, incluindo Leonardo da Vinci (como Platão) e Michelangelo (como Heráclito).

Em 1991, o designer **Mark Kostabi** extraiu duas figuras da obra para criar as capas dos álbuns *Use Your Illusion I* e *II* do Guns N' Roses — discos que venderam mais de 35 milhões de cópias. Um intervalo de 481 anos entre a origem e o ícone pop.

---

## Créditos

| Item | Fonte |
|------|-------|
| Obra principal | Rafael Sanzio · Museus do Vaticano |
| Cartão preparatório | Pinacoteca Ambrosiana · Milão |
| Capas dos álbuns | Mark Kostabi · Geffen Records · 1991 |
| PNGs dos filósofos | Recortes digitais da obra original |
| Fontes tipográficas | Google Fonts (OFL License) |

---

## Licença

Este projeto é de uso educacional e cultural, sem fins comerciais. As imagens da obra de Rafael Sanzio são de domínio público. As capas dos álbuns do Guns N' Roses pertencem à Geffen Records e são utilizadas aqui exclusivamente para fins de referência histórica e cultural, sem qualquer uso comercial.

---

<p align="center">
  Raffaello Sanzio · 1509–1511 · Stanza della Segnatura · Museus do Vaticano
  <br><br>
  <em>"A arte verdadeira não envelhece — ela se transforma."</em>
</p>
