  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      document.querySelectorAll('.faq-content').forEach(c => {
        if (c !== content) c.classList.add('hidden');
      });

      document.querySelectorAll('.faq-icon').forEach(i => {
        if (i !== icon) i.textContent = '+';
      });

      content.classList.toggle('hidden');
      icon.textContent = content.classList.contains('hidden') ? '+' : '×';
    });
  });