### css外部和行内样式使用!important时，行内样式优先
```css
     #app{
      color: red!important;
     }
    <div id="app" style="color:pink!important;">
        <p>{{ message }}</p>
    </div>
```

### css3 transform
```
1.旋转 rotate
transform: rotate(45deg)
共一个参数“角度”，单位deg为度的意思，正数为顺时针旋转，负数为逆时针旋转，上述代码作用是顺时针旋转45度。

2.缩放 scale
transform:scale(0.5)或者  transform: scale(0.5, 2);
参数表示缩放倍数；

一个参数时：表示水平和垂直同时缩放该倍率
两个参数时：第一个参数指定水平方向的缩放倍率，第二个参数指定垂直方向的缩放倍率。

3.倾斜 skew
transform: skew(30deg)或者 transform: skew(30deg, 30deg);

一个参数时：表示水平方向的倾斜角度；
两个参数时：第一个参数表示水平方向的倾斜角度，第二个参数表示垂直方向的倾斜角度。

4.移动 translate
transform: translate(45px) translate(45px, 150px)
参数表示移动距离，单位px，
通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数

一个参数时：表示水平方向的移动距离；
两个参数时：第一个参数表示水平方向的移动距离，第二个参数表示垂直方向的移动距离。

transform: translateX(0)

5. 过度 transition
transition:property duration timing-function delay;

transition-property 规定设置过渡效果的 CSS 属性的名称。
transition-duration 规定完成过渡效果需要多少秒或毫秒。
transition-timing-function 规定速度效果的速度曲线。
transition-delay 定义过渡效果何时开始。

6.基准点 transform-origin

：transform-origin: 10px 10px;
共两个参数，表示相对左上角原点的距离，单位px，第一个参数表示相对左上角原点水平方向的距离，第二个参数表示相对左上角原点垂直方向的距离；
两个参数除了可以设置为具体的像素值，其中第一个参数可以指定为left、center、right，第二个参数可以指定为top、center、bottom。
```