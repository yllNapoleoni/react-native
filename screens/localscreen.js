
const style = document.createElement("style");

style.textContent = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #0d0d0d;
    font-family: Arial, sans-serif;
    color: #111;
    overflow: auto;
  }

  .screen {
    min-height: 100vh;
    padding: 54px 48px;
    display: flex;
    align-items: flex-start;
    gap: 0;
    position: relative;
  }

  /* Product card */
  .product-card {
    width: 467px;
    min-height: 614px;
    flex-shrink: 0;
    background: #f5f5f5;
    text-align: center;
    padding: 12px 25px 0;
    overflow: hidden;
  }

  .nike-logo {
    font-size: 35px;
    font-weight: 900;
    font-style: italic;
    transform: rotate(-12deg);
    display: inline-block;
    margin: 0 0 28px;
    line-height: 1;
  }

  .shoe-container {
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .shoe-container svg {
    width: 100%;
    max-width: 350px;
    height: auto;
    filter: drop-shadow(0 5px 2px #bbb);
  }

  .product-title {
    margin: 0;
    font-size: 39px;
    font-weight: 800;
    letter-spacing: -1.3px;
    white-space: nowrap;
    background: linear-gradient(
      90deg, #10477f, #278d7c, #43a54b
    );
    color: transparent;
    background-clip: text;
  }

  .wave {
    width: 130px;
    margin: 9px auto 30px;
    height: 7px;
    background: repeating-radial-gradient(
      ellipse at center,
      transparent 0 4px,
      #75a9b7 4px 6px,
      transparent 6px 10px
    );
  }

  .product-subtitle {
    font-size: 14px;
    color: #555;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .description {
    max-width: 310px;
    margin: 0 auto;
    color: #666;
    font-size: 10px;
    line-height: 1.35;
  }

  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 27px;
  }

  .color {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 3px;
  }

  .color.active {
    outline-color: #aaa;
  }

  .blue { background: #064581; }
  .green { background: #61c64c; }
  .gray { background: #3c4967; }

  .price {
    font-size: 57px;
    font-weight: 800;
    color: #626262;
    margin-top: 30px;
    letter-spacing: -2px;
  }

  /* Notepad window */
  .notepad {
    position: absolute;
    top: 186px;
    left: 47.4%;
    width: 555px;
    height: 430px;
    background: #fff;
    border: 1px solid #b8b8b8;
    box-shadow: 0 2px 12px #0008;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .titlebar {
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 7px;
    font-size: 12px;
    flex-shrink: 0;
  }

  .notepad-icon {
    font-size: 15px;
  }

  .window-controls {
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .window-controls span {
    width: 43px;
    text-align: center;
    font-size: 15px;
    color: #333;
  }

  .window-controls .close {
    font-size: 18px;
  }

  .menubar {
    height: 28px;
    padding: 5px 8px;
    display: flex;
    gap: 17px;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    flex-shrink: 0;
  }

  .editor {
    border: none;
    outline: none;
    resize: none;
    flex: 1;
    width: 100%;
    padding: 7px 4px;
    font-family: Consolas, "Courier New", monospace;
    font-size: 13px;
    line-height: 1.85;
    color: #111;
    white-space: pre;
    overflow: auto;
  }

  .statusbar {
    height: 36px;
    background: #f4f4f4;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #333;
    flex-shrink: 0;
  }

  .statusbar span {
    padding: 0 12px;
    border-left: 1px solid #ddd;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .statusbar .status-spacer {
    flex: 1;
    border: none;
  }

  @media (max-width: 1000px) {
    .screen {
      padding: 24px;
      flex-wrap: wrap;
      gap: 25px;
    }

    .product-card {
      width: min(467px, 100%);
    }

    .notepad {
      position: relative;
      top: auto;
      left: auto;
      width: min(555px, 100%);
      height: 430px;
    }
  }
`;

document.head.appendChild(style);

document.body.innerHTML = `
  <main class="screen">

    <section class="product-card">
      <div class="nike-logo">✓</div>

      <div class="shoe-container">
        <svg viewBox="0 0 380 190"
             xmlns="http://www.w3.org/2000/svg"
             role="img" aria-label="Blue and green athletic shoe">
          <defs>
            <linearGradient id="upper" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#162c54"/>
              <stop offset="55%" stop-color="#07152f"/>
              <stop offset="100%" stop-color="#102b51"/>
            </linearGradient>
            <linearGradient id="sole" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#79f53c"/>
              <stop offset="100%" stop-color="#27a72d"/>
            </linearGradient>
            <linearGradient id="heel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#0877bb"/>
              <stop offset="100%" stop-color="#17446e"/>
            </linearGradient>
          </defs>

          <!-- Sole -->
          <path d="M28 126
                   Q42 132 57 134
                   L99 142 L153 148
                   L224 151 L303 144
                   Q333 140 353 120
                   L360 127 Q357 147 333 157
                   Q277 166 213 164
                   L119 160 L48 151
                   Q27 146 28 126Z"
                fill="url(#sole)"/>

          <!-- Heel -->
          <path d="M34 71 Q22 94 27 124
                   Q36 139 62 142
                   L83 135 L80 95Z"
                fill="url(#heel)"/>

          <!-- Main shoe upper -->
          <path d="M37 72
                   Q47 55 58 67
                   L82 91 Q99 105 119 91
                   L145 69 Q151 64 165 75
                   L202 91 L253 108
                   Q298 120 339 111
                   Q352 112 359 125
                   Q346 143 311 146
                   L208 150 L113 143
                   L60 136 Q37 132 30 117
                   Q28 97 37 72Z"
                fill="url(#upper)"/>

          <!-- Bright green collar -->
          <path d="M43 70 Q49 55 60 67
                   L82 91 Q98 102 115 91
                   L142 69 L157 72
                   L132 100 Q106 117 82 102
                   L57 79 Q50 74 43 85Z"
                fill="#39ed35"/>

          <!-- Heel overlay -->
          <path d="M35 83 Q43 94 58 101
                   L69 132 L44 127 Q28 118 35 83Z"
                fill="#0783bc"/>

          <!-- Nike-like swoosh -->
          <path d="M63 112
                   Q104 98 149 75
                   Q164 67 173 77
                   Q163 94 139 106
                   Q103 123 69 124
                   Q56 123 63 112Z"
                fill="#f5f5f5"/>

          <!-- Laces -->
          <g stroke="#48ef39" stroke-width="4"
             stroke-linecap="round" fill="none">
            <path d="M145 73 L174 85"/>
            <path d="M156 80 L184 91"/>
            <path d="M168 86 L196 98"/>
            <path d="M181 92 L209 103"/>
            <path d="M195 99 L222 109"/>
          </g>

          <!-- Stitching and mesh lines -->
          <g stroke="#29456c" stroke-width="2" opacity=".8">
            <path d="M215 105 L235 143"/>
            <path d="M231 109 L248 143"/>
            <path d="M247 113 L262 143"/>
            <path d="M263 116 L278 142"/>
            <path d="M279 119 L293 141"/>
            <path d="M295 120 L310 137"/>
          </g>

          <!-- Front toe -->
          <path d="M248 115 Q300 127 340 111
                   Q357 111 359 125
                   Q344 145 307 147
                   L248 148Z"
                fill="#101e3e" opacity=".45"/>

          <!-- Green outsole detail -->
          <path d="M80 139 L147 148 L218 153
                   L288 148 L333 142
                   L321 155 L213 160
                   L115 155 L68 148Z"
                fill="#31c72f"/>

          <!-- Small tread details -->
          <g stroke="#239e2b" stroke-width="2">
            <path d="M269 149 L266 157"/>
            <path d="M283 148 L281 157"/>
            <path d="M298 147 L297 155"/>
            <path d="M312 145 L311 153"/>
          </g>
        </svg>
      </div>

      <h1 class="product-title">NIKE HYPERCHASE</h1>
      <div class="wave"></div>

      <div class="product-subtitle">
        Men's Basketball Shoes
      </div>

      <p class="description">
        Lorem ipsum, diqi ve basket endüstrisinde kullanılan
        mağ materyallerdir. Lorem ipsum, adi bilinmeyen bir
        hurufat numune kitabı oluşturmak üzere bir yazı galerisi
        olarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler.
      </p>

      <div class="colors">
        <button class="color blue active"
                data-color="blue"
                aria-label="Blue"></button>
        <button class="color green"
                data-color="green"
                aria-label="Green"></button>
        <button class="color gray"
                data-color="gray"
                aria-label="Gray"></button>
      </div>

      <div class="price">125$</div>
    </section>

    <section class="notepad">
      <div class="titlebar">
        <span class="notepad-icon">🗒️</span>
        <span>*Untitled - Notepad</span>

        <div class="window-controls">
          <span>−</span>
          <span>□</span>
          <span class="close">×</span>
        </div>
      </div>

      <div class="menubar">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <textarea class="editor" spellcheck="false">{
"id" : 1,

"name" : "Iphone X",

"category" : "phone",

"price" : "$400",

"stock" : "Yes",

"image" : "phone's img",

"description": "Lorem ipsum dolor sit amet"
}</textarea>

      <div class="statusbar">
        <span class="status-spacer"></span>
        <span>Ln 16, Col 2</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    </section>

  </main>
`;

// Interactive product color selectors
document.querySelectorAll(".color").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".color").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
  });
});
