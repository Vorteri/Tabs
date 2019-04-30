window.addEventListener('DOMContentLoaded', function() {
'use strict';

let tabs = (tabWrap, tabSelection, tabItself	) => {

		let tabWrapper = document.querySelector(tabWrap),
		    tabSelector = document.querySelectorAll(tabSelection),
						tab = document.querySelectorAll(tabItself);


				function hideTabContent(a) {
					for (let i = a; i < tab.length; i++) {
						tab[i].classList.remove('show');
						tab[i].classList.add('hide');
					}
				}
				hideTabContent(1);

				function showTabContent(b) {
			if (tab[b].classList.contains('hide')) {
				    tab[b].classList.remove('hide');
				    tab[b].classList.add('show');
					}
				}

				tabWrapper.addEventListener('click', function(event) {
					let target = event.target;

					if(target && target.classList.contains('info-header-tab')) {
						for(let i = 0; i < tabSelector.length; i++) {
							if(target == tabSelector[i]) {
								hideTabContent(0);
								showTabContent(i);
								break;
							}
						}
					}
				});
			};
			tabs('.info-header', '.info-header-tab','.info-tabcontent');
});