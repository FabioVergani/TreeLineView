for(const t of document.getElementsByClassName('tree')){
	const d=document;

	for(const e of t.getElementsByTagName('A')){
		e.parentElement.classList.add('collapsed')
	};

	for(const e of t.getElementsByTagName('LI')){
		const b=d.createElement('input');
		b.type='checkbox';
		let x=e.firstChild;
		if(null!==x){e.insertBefore(b,x)}else{e.appendChild(b)};
		e.parentElement.classList.add('collapsed')
	};

	t.addEventListener('click',o=>{
		const e=o.target;
		if(1===e.nodeType){
			const n=e.tagName,p=e.parentElement,m=p.classList;
			if('A'===n){
				m[m.toggle('collapsed')?'remove':'add']('expanded')
			}else if('INPUT'===n && 'checkbox'===e.type){
				const v=e.checked,i=v?'add':'remove';
				m[i]('checked');
				for(const b of p.getElementsByTagName('INPUT')){
					b.parentElement.classList[i]('checked');
					b.checked=v
				}
			}
		}
	});

	t.classList.add('collapsable')
};
