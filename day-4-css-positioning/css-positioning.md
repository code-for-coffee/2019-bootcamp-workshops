# CSS Positioning

---

## Agenda

* Static
* Relative
* Absolute
* Relative & Fixed
* Fixed
* Floats

---

## Static

The **default positioning** for all elements.

If you do not define `position` for an element, it has:

```css
div {
  position: static;
}
```

---

## Relative

Allows you to position an element **relative** to where it would normally have been on the screen.

[Relative Example](relative.html)

---

## Absolute

When using `absolute`, the element is **removed from the flow** of the document and placed exactly where you say to go on the screen.

[Relative Example](absolute.html)

---

## Relative & Fixed

If we use `relative` on a parent element, then any child element that uses `absolute` will be relative to the parent, not the screen.

[Relative Example](relative-and-absolute.html)

---

## Fixed

When using `fixed`, the element is **removed from the flow** of the document and placed exactly where you say to go on the `viewport`. Which means it **will not move** when you scroll.

[Relative Example](fixed.html)

---

## Floats

We can `float` an element to push it as far as possible to the right or to the left, and allow text to wrap around it.

> This is typically used for images, but we will use it for more complex layout tasks (because it's the only tool we have).

**[Published in 2006](http://www.barelyfitz.com/screencast/html-training/css/positioning/)**

❗ Floats should not be used for layouts. ❗

[Relative Example](floats.html)

---
