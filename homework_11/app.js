let rootNode = document.getElementById("root");

function toggle(click) {
  let icon = this.children[0].innerHTML;
  this.children[0].innerHTML = icon == 'folder_open' ? 'folder' : 'folder_open';
  let folderShow = this.nextElementSibling.style.display;
  this.nextElementSibling.style.display = folderShow == 'block' ? 'none' : 'block';
}

function paintTree(structure, root) {
  structure.forEach(function(rootEl) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("i");
    img.className = "material-icons";
    img.innerHTML = rootEl.folder ? 'folder' : 'insert_drive_file';
    p.className = !rootEl.folder ? '' : 'folder';
    rootEl.folder ? p.addEventListener('click', toggle) : null;
    let span = document.createElement("span");
    span.innerHTML = rootEl.title;
    p.appendChild(img);
    p.appendChild(span);
    li.appendChild(p);
    root.appendChild(li);

    if (rootEl.children) {
      let innerClildUl = document.createElement('ul');
      innerClildUl.style.display = 'none';
      li.appendChild(innerClildUl);
      paintTree(rootEl.children, innerClildUl);
    }
    if (rootEl.folder && !rootEl.children) {
      let ul = document.createElement('ul');
      let emptyLi = document.createElement("li");
      emptyLi.className = "emptyLi";
      let emptyP = document.createElement('p');
      emptyP.innerHTML = 'Folder is epmty';
      emptyLi.appendChild(emptyP);
      ul.appendChild(emptyLi);
      ul.style.display = "none";
      li.appendChild(ul);
    }
  });
}

let div = document.createElement('div');
let treeUl = document.createElement('ul');
paintTree(structure, treeUl);
div.appendChild(treeUl);

rootNode.appendChild(div);
