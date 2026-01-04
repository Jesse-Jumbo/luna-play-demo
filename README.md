# LunaPlay 月之盒 - 網頁 Demo

這是一個展示「LunaPlay 月之盒」情侶主題訂閱盒服務的網頁 Demo。

## 功能特色

- **服務介紹**：展示每月主題盒、隱密包裝、教學與社群等核心服務
- **主題展示**：呈現四種主題類型（角色扮演、感官探索、BDSM 入門、浪漫氛圍）
- **訂閱方案**：三種訂閱選項（單次購買、每季訂閱、每年訂閱）
- **加購選項**：安全用品、潤滑用品、清潔用品、其他道具
- **匿名社群**：心得分享、匿名問答、主題投票、專家專欄

## 使用方式

1. 直接在瀏覽器中開啟 `index.html` 檔案
2. 或使用本地伺服器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js (需先安裝 http-server)
   npx http-server
   ```
3. 在瀏覽器中訪問 `http://localhost:8000`

## 檔案結構

```
web-demo/
├── index.html      # 主頁面結構
├── styles.css      # 樣式檔案
├── script.js       # 互動功能
└── README.md       # 說明文件
```

## 技術說明

- 純 HTML/CSS/JavaScript 實現，無需額外依賴
- 響應式設計，支援手機、平板、桌面裝置
- 使用現代 CSS 特性（Grid、Flexbox、動畫）
- 模態視窗（Modal）實現互動功能

## 注意事項

此為 Demo 版本，部分功能（如實際購買、投票、文章詳情）需連接後端系統才能完整運作。

