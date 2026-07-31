// ==========================================================
// CLARIA — 共通スクリプト（全ページで読み込み）
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  // スクロールで要素をふわっと表示
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // ポートフォリオ絞り込み（ポートフォリオページのみ存在する場合に動作）
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#portfolioGrid .p-card');
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(c => {
          c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
        });
      });
    });
  }

  // モバイルメニューの開閉
  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('nav ul');
  if (hamburger && navUL) {
    let mobileOpen = false;
    hamburger.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        navUL.style.cssText = 'display:flex;flex-direction:column;gap:18px;position:fixed;top:76px;left:0;right:0;background:#0D2740;padding:26px 32px;border-bottom:1px solid rgba(231,241,250,0.12);';
      } else {
        navUL.style.cssText = '';
      }
    });
  }

});
