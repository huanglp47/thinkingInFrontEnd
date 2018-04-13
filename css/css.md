# css外部和行内样式使用!important时，行内样式优先
```css
     #app{
      color: red!important;
     }
    <div id="app" style="color:pink!important;">
        <p>{{ message }}</p>
    </div>
```

