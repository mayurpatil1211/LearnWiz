import { Component, OnInit } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

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

 isLogin: boolean = true;

  nodes = [];
  constructor() {
    this.nodes = [{
			id: '',
			name: 'Exercise 1',
			date: '2017-08-19',
			status: '2',
      published: false,
			children: [{
				name: '1. Using appropriate properties find  -2/3 x 3/5 + 5/2 - 3/5 x 1/6 ?',
				date: '2017-08-20',
				status: '3',
       	published: false,
       			
			},
      {
        name: '2. Write the additive inverse of each of the following (i) 2/8 (ii) -5/9 (iii) -6/5 (iv) 2/-9 ?',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      },
      {
        name: '3. Verify that -(-x) = x for. (i) x =11/15 (ii) x = -13/17 ?',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      },{
        name: '4. Find the multiplicative inverse of the following. (i) -13 (ii) -13/19 (iii) 1/5 (iv) (-5/8) X (-3/7) ?',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      },{
        name: '5. Multiply 6/13 by the reciprocal of -7/16 ?',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      },{
        name: '6. Is 0.3 the multiplicative inverse of 3(1/3)? Why or why not?',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      },{
        name: '7. Write. <br>(i) The rational number that does not have a reciprocal.',
        date: '2017-08-20',
        status: '3',
         published: false,
             
      }]
		}];
  }

  ngOnInit() {
  }

}
