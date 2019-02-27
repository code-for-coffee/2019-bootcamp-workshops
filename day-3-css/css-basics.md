# CSS Basics

---

## Agenda

* Basics
* The Cascade
* Specificity
* Box Model
* Layout
* Naming Conventions

---

## Basics

---

### 选择 (Selector)

```css
/* 👇 This is the selector */
.red {
  color: red;
}
```

---

### 属性 (Property)

```css
.red {
  color: red;
/* 👆 this is the property. */
}
```

---

### 值 (Value)

```css
.red {
  color: red;
      /* 👆 this is the value. */
}
```

---

[Selector Example](selector.html)

---

## 级联 (Cascade)

CSS stands for Cascading Style Sheets.

The "Cascade" in CSS applies rules from **top to bottom**.

---

###  黄果树瀑布 (Huangguoshu Waterfall)

![Huangguoshu Waterfall](images/huangguoshu-waterfall.jpg)

---

[Cascade Example](cascade.html)

---

## 特异性 (Specificity)

Specificity determines, **which rule** is applied by the browsers.

---

Specificity is usually the reason why your CSS-rules don’t apply to some elements, although you think they should.

---

If two selectors apply to the same element, the one with **higher specificity** wins.

---

### SpeciFISHity

---

![Specifishity part 1](images\specifishity-1.png)

---

![Specifishity part 2](images\specifishity-2.png)

---

![Specifishity part 3](images\specifishity-3.png)

---

![Specifishity part 4](images\specifishity-4.png)

---

![Specifishity part 5](images\specifishity-5.png)

---

### 计算器 (Specificity Calculator)

![Specificity Calculator](images\specificity-calc.jpg)

[specificity.keegan.st](https://specificity.keegan.st/)

---

## Box Model

![Box Model Example showing content, padding, border, and margin.](images\box-model.png)

---

Notebook is the **content**.

Bubblewrap is the **padding**.

Bag is the **border**.

Space between bag to other bag is **margin**.

---

## Conventions

---

### BEM

![BEM 101](images\bem-101.jpg)

[BEM 101 - CodePen](https://codepen.io/coltborg/pen/OqJzNv?editors=0100)

[CSS Tricks - BEM 101](https://css-tricks.com/bem-101/)

[BEM Example](bem.html)

---

### Functional / Atomic

![Functional 101](images\functional-css.jpg)

[Functional 101 - CodePen](https://codepen.io/coltborg/pen/modxVJ?editors=1100)

[Functional Example](functional.html)

---
