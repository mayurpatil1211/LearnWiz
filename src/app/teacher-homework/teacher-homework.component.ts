import { Component, OnInit } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { IMyDpOptions } from 'mydatepicker';

const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};


@Component({
  selector: 'app-teacher-homework',
  templateUrl: './teacher-homework.component.html',
  styleUrls: ['./teacher-homework.component.css']
})


export class TeacherHomeworkComponent implements OnInit {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    showTodayBtn: true,
    minYear: 2017,
    maxYear: 2019,
    openSelectorOnInputClick: true,
    inline: false,
    editableDateField: false,
    openSelectorTopOfInput : false
    //disableUntil: { year: 2017, month: 7, day: 25 },
    //disableDays: [{ year: 2017, month: 7, day: 27 }, { year: 2017, month: 8, day: 15 }]
  };


  isLogin: boolean = true;
  showPublishCheckbox: boolean = true;





  nodes = [];
  constructor() {
    this.nodes = [{
			id: '',
			name: 'Exercise 1',
			date: '23-08-2017',
			status: '2',
      published: false,
			children: [{
				name: '1. Using appropriate properties find  -2/3 x 3/5 + 5/2 - 3/5 x 1/6 ?',
				date: '23-08-2017',
				status: '3',
       	published: false,
       			
			},
      {
        name: '2. Write the additive inverse of each of the following (i) 2/8 (ii) -5/9 (iii) -6/5 (iv) 2/-9 ?',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      },
      {
        name: '3. Verify that -(-x) = x for. (i) x =11/15 (ii) x = -13/17 ?',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      },{
        name: '4. Find the multiplicative inverse of the following. (i) -13 (ii) -13/19 (iii) 1/5 (iv) (-5/8) X (-3/7) ?',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      },{
        name: '5. Multiply 6/13 by the reciprocal of -7/16 ?',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      },{
        name: '6. Is 0.3 the multiplicative inverse of 3(1/3)? Why or why not?',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      },{
        name: '7. Write. <br>(i) The rational number that does not have a reciprocal.',
        date: '23-08-2017',
        status: '3',
         published: false,
             
      }]
		}];
  }

  ngOnInit() {
  }



     actionMapping: IActionMapping = {
    mouse: {
      click: (tree, node) => this.check(node, !node.data.checked)
    }
  };

  options: ITreeOptions = {
    actionMapping: this.actionMapping
  };

  public check(node, checked) {
    this.updateChildNodeCheckbox(node, checked);
    this.updateParentNodeCheckbox(node.realParent);
  }
  public updateChildNodeCheckbox(node, checked) {
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
    }
  }
  public updateParentNodeCheckbox(node) {
    if (!node) {
      return;
    }

    let allChildrenChecked = true;
    let noChildChecked = true;

    for (const child of node.children) {
      if (!child.data.checked || child.data.indeterminate) {
        allChildrenChecked = false;
      }
      if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildrenChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    } else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    } else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodeCheckbox(node.parent);
  }

  public publishModules(){
    this.showPublishCheckbox = false;
  }

  public publishSubmit(){
    this.showPublishCheckbox = true;
    for(let node of this.nodes){
      node.published = node.checked;
      if(node.children){
        this.publishCheckedModules(node.children);
      }
    }
  }

  public publishCheckedModules(childNodes){
    for(let node of childNodes){
      node.published = node.checked;
      if(childNodes.children){
        this.publishCheckedModules(childNodes.children);
      }
    }
  }

}
