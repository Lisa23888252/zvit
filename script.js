function showLab(id) {
  // Сховати всі блоки
  document.querySelectorAll('.lab-block').forEach(el => el.classList.add('hidden'));

  // Показати потрібний
  const block = document.getElementById(id);
  if (block) block.classList.remove('hidden');

  // Якорі для гіперпосилань
  const anchors = {
    lab1: [
      { text: 'Тема', anchor: '#topic1' },
	  { text: '1. Семантичні теги', anchor: '#semantic-tags' },
	  { text: '2. Основні елементи HTML', anchor: '#html-elements' },
	  { text: 'Заголовок першого рівня', anchor: '#h1' },
	  { text: 'Заголовок другого рівня', anchor: '#h2' },
	  { text: 'Зображення', anchor: '#images' },
	  { text: 'Таблиця', anchor: '#table' },
	  { text: 'Списки', anchor: '#lists' },
	  { text: 'Форма', anchor: '#form' },
	  { text: 'Посилання на іншу WEB-сторінку', anchor: '#link' },
	  { text: 'Висновок', anchor: '#conclusion' },
    ],
    lab2: [
    { text: 'Тема', anchor: '#topic2' },
    { text: '1. Селектори тегів', anchor: '#tag-selectors' },
    { text: '2. Селектори класів', anchor: '#class-selectors' },
    { text: '3. Селектори ідентифікаторів', anchor: '#id-selectors' },
    { text: '4. Інші селектори', anchor: '#other-selectors' },
    { text: '5. CSS: Шрифти Текст Таблиці Фон Контур Списки CSS-поглиблений', anchor: '#css-font-text' },
    { text: 'Шрифти', anchor: '#font' },
    { text: 'Текст', anchor: '#text' },
    { text: 'Таблиця', anchor: '#table' },
    { text: 'Фон', anchor: '#background' },
    { text: 'Контур (border)', anchor: '#border' },
    { text: 'Списки', anchor: '#lists' },
    { text: 'CSS Просунутий', anchor: '#advanced-css' },
    { text: 'Висновок', anchor: '#conclusion2' },
  ],
  
    lab3: [
	{ text: 'Тема', anchor: '#topic3' },
	{ text: 'Завдання №2.1: Таблична верстка', anchor: '#lab3-task1' },
	{ text: 'Завдання №2.2: Блокова верстка з плаваючими елементами', anchor: '#lab3-task2' },
	{ text: 'Завдання №3: Верстка з використанням Flexbox', anchor: '#lab3-task3' },
	{ text: 'Висновок', anchor: '#lab3-summary' },
	],
    lab4: [
	{ text: 'Тема', anchor: '#topic4' },
	{ text: 'Декстопна версія', anchor: '#1' },
	{ text: 'Планшетна версія', anchor: '#2' },
	{ text: 'Мобільна версія', anchor: '#3' },
	{ text: 'Висновок', anchor: '#lab4-summary' },
	],
    
  };

  const links = anchors[id] || [];
  const labLinks = document.getElementById("lab-links");

  // Вивід гіперпосилань
  labLinks.innerHTML = links.map(link =>
    `<a href="${link.anchor}">${link.text}</a>`
  ).join('');
}

