Все компоненты должны 
содержать в себе enum **changeDetection**, 
со значением **ChangeDetectionStrategy.OnPush**

## Checkbox
### Выполняет: Dmitry
### Тэг: 
```html
<mat-checkbox></mat-checkbox>
```
### Директивы
* color

### Переменные
> src/assets/styles/vars/checkbox.scss
* $checkbox-height - высота checkbox'a
* $checkbox-width - ширина checkbox'a

### Реализация
Angular Material Checkbox, для реализации необходим import
```ts
import {MatCheckboxModule} from '@angular/material/checkbox';
```
### Screenshot
![checkbox](./demo/checkbox.png)

## Button
### Выполняет: Dmitry
### Тэг: 
```html
<button></button>
```
### Директивы
* mat-button
* mat-flat-button
* mat-raised-button
* mat-stroked-button
* color

### Переменные 
> src/assets/styles/vars/button.scss
* $button-size: font-size кнопки
> src/assets/styles/vars/general.scss
* $mat-primary - оранжевый цвет
* $mat-accent - синий цвет
* $mat-warn - красный цвет
* не передавая атрибут color - белый цвет

### Реализация
Angular Material Button, для реализации необходим import
```ts
import {MatButtonModule} from '@angular/material/button';
```

### Screenshot
![button](./demo/button.png)

## Select
### Выполняет: Alexander
### Тэг: 
```html
<mat-select>
    <mat-option></mat-option>
</mat-select>
```
### Переменные
> src/assets/styles/vars/general.scss
* $border-radius
> src/assets/styles/vars/input.scss
* $input-padding

### Реализация
Для реализации 
необходимо импортировать angular material модуль
```ts
import {MatSelectModule} from '@angular/material/select';
```
### Screenshot
![select](./demo/select.png)

## Dot
### Тэг: 
```html
<gen-dot></gen-dot>
```
### Директивы
* color

### Переменные
> src/assets/styles/vars/dot.scss
* $dot-height: высота dot
* $dot-width: ширина dot
* $dot-border-radius: border-radius dot

### Реализация
Для работоспособности компонента, необходимо в тег **div** записать attribute:
* color (primary, warn, pink, gradient, accent, green)
```ts
import {MatButtonModule} from '@angular/material/button';
```

### Screenshot
![dot](./demo/dot.png)

## Datepicker
### Выполняет: Dmitry
### Тэг: 
```html
<gen-datepicker></gen-datepicker>
```

### Реализация
Для работоспособности компонента необходимо сделать импорт модуля
```ts
import {MatDatepickerModule} from '@angular/material/button';
```

![datepicker](./demo/datepicker.png)

## Input
### Выполняет: Dmitry
### Тэг: 
```html
<gen-input></gen-input>
```
### Компонент
* @Input() input: Input
### Переменные
> src/assets/styles/input.scss
* $input-padding: внутренние отступы input'a
### Реализация
Для реализации 
необходимо передавать в
атрибут **[input]** объект с интерфейосм:
```ts
export interface Input {
  img: string;
  label: string;
  required: boolean;
}
```

### Screenshot
![input](./demo/input.png)

## StudentFeedback
### Выполняет: Lado
### Тэг: 
```html
<gen-student-feedback></gen-student-feedback>
```
### Компонент
* @Input() feedback: Feedback

### Переменные
> src/assets/styles/vars/general.scss
* $accent-gradient: синий градиент
> src/assets/styles/vars/student-feedback.scss
* $padding: внутренние отступы select'a;

### Реализация
Для реализации 
необходимо передавать в
атрибут **[feedback]** объект с интерфейосм:
```ts
interface FeedbackEmoji {
  emoji: string;
  text: string;
}
interface HomeWorkStatus {
  completed: boolean;
  date?: string;
}

export interface Feedback {
  homework: HomeWorkStatus;
  feedback: FeedbackEmoji;
}
```

### Screenshot
![student-feedback](./demo/student-feedback.png)

## ConfirmModal
### Выполняет: Dmitry
### Тэг: 
```html
<gen-confirm></gen-confirm>
```
### Компонент
* @Input() confirm: Confirm
### Переменные
> src/assets/styles/vars/general.scss
* $border-radius
### Реализация
Для реализации 
необходимо передавать в
атрибут **[confirm]** объект с интерфейосм:
```ts
export interface Confirm {
  title: string;
  desc: string;
}
```

### Screenshot
![confirm-modal](./demo/confirm.png)

## ConfirmModal
### Выполняет: Dmitry
### Тэг: 
```html
<gen-modal></gen-modal>
```
### Компонент
* @Input() modal: Modal
### Переменные
> src/assets/styles/vars/general.scss
* $border-radius
* $accent-gradient
### Реализация
Для реализации 
необходимо передавать в
атрибут **[modal]** объект с интерфейосм:
```ts
export interface Modal {
  img?: string;
  state?: string;
  text: string;
  success?: boolean;
}
```

### Screenshot
![modal](./demo/modal.png)

# NOT RELEVANT YET 

## StarCardComponent (#25 notification from kid)
### Тэг: 
```html
<gen-star-card></gen-star-card>
```
### Компонент
* @Input() card: IStarCard

### Реализация
Для реализации 
необходимо передавать в
атрибут **[card]** объект с интерфейосм:
```ts
export interface IStarCard {
  text: string;
  countStars: number;
}
```
### Screenshot
![notification-card](./demo/notification-card.png)

## NotificationSettingComponent (#22 notification setting)
### Тэг: 
```html
<gen-notification-setting></gen-notification-setting>
```
### Компонент
* @Input() setting: INotificationSetting

### Реализация
Для реализации 
необходимо передавать в
атрибут **[setting]** объект с интерфейосм:
```ts
export interface INotificationSetting {
  text: string;
  select?: ISelect;
}
```
### Screenshot
![notification-setting](./demo/notification-setting.png)

## NotificationListComponent (#23 notification all)
### Тэг: 
```html
<gen-notification-list></gen-notification-list>
```
### Компонент
* @Input() list: INotificationList

### Реализация
Для реализации 
необходимо передавать в
атрибут **[list]** объект с интерфейосм:
```ts
export interface INotificationList {
  text: string;
  date: string;
  phoneNumber?: string;
  isRequiresConfirmation?: boolean;
}
```
### Screenshot
![notification-setting](./demo/notification-list.png)

## ScheduleCardComponent (#11 schedule)
### Тэг: 
```html
<gen-schedule-card></gen-schedule-card>
```
### Компонент
* @Input() card: IScheduleCard

### Реализация
Для реализации 
необходимо передавать в
атрибут **[card]** объект с интерфейосм:
```ts
export interface IScheduleCard {
  name: string;        
  date: string;
  dotColor: NamesColor;              
  subject?: string;
}
```
### Screenshot
![schedule-card](./demo/schedule-card.png)

## LessonCardComponent (#18 lesson card for student...)
### Тэг: 
```html
<gen-lesson-card></gen-lesson-card>
```
### Компонент
* @Input() card: ILessonCard

### Реализация
Для реализации 
необходимо передавать в
атрибут **[card]** объект с интерфейосм:
```ts
export interface ILessonCard {
  kidText: string;
  lessonText: string;
  parentText: string;
  nextLessonText: string;
  homeworkTastText: string;  
}
```
### Screenshot
![lesson-card](./demo/lesson-card.png)

## PriceCardsComponent (#09 Prices)
### Тэг: 
```html
<app-price-cards></app-price-cards>
```
### Компонент
* @Input() cards: IPriceCard[]

### Реализация
Для реализации 
необходимо передавать в
атрибут **[cards]** объект с интерфейосм:
```ts
interface IPriceInput {
  label: 'In my house' | 'At student house';
}

export interface IPriceCard {
  subject: string;
  subcategories: string[];
  inputs: IPriceInput[];
}
```
### Screenshot
![price-cards](./demo/price-cards.png)

## ChatOverlayComponent (#41 Chat)
### Тэг: 
```html
<app-chat-overlay></app-chat-overlay>
```
### Компонент
* @Input() chat: IChatOverlay[]

### Реализация
Для реализации 
необходимо передавать в
атрибут **[chat]** объект с интерфейосм:
```ts
interface IChatMessage {
  name: string;
  message: string;
}

export interface IChatOverlay {
  kid: string[];
  parent: string[];
}
```
### Screenshot
![chat-overlay](./demo/chat-overlay.png)

## ChatOverlayComponent (#24 Chat)
### Тэг: 
```html
<app-chat-overlay></app-chat-overlay>
```
### Компонент
* @Input() chat: IChat

### Реализация
Для реализации 
необходимо передавать в
атрибут **[chat]** объект с интерфейосм:
```ts
export interface IChat {
  message: string;    
  img: string;
  readed: boolean;
  date: string;
  isMyMesssage: boolean;
}
```
### Screenshot
![chat](./demo/chat.png)

## PaymentCardComponent (#17 payment)
### Тэг: 
```html
<app-payment-card></app-payment-card>
```
### Компонент
* @Input() img: string

### Реализация
Для реализации 
необходимо передавать в
атрибут **[img]** объект с интерфейосм:
### Screenshot
![payment-card](./demo/payment-card.png)
