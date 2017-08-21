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
			name: 'Chapter 1',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: 'Sub Chapater 1',
				date: '2017-08-20',
				status: '3',
       			published: false,
       			children: [{
					name: '1.1.a final topic',
					date: '2017-08-20',
					status: '1',
					published: false,
       			}]
			}]
		}, {
			id: 2,
			name: 'Chapater 2',
			date: '2017-08-20',
			status: '3',
      		published: false,
			children: [{
				name: 'Sub topic 1',
				status: '0',
        		published: false,
        		children: [{
        			name: 'Sub Chapater 2',
					status: '0',
	        		published: false,
        		}]
				}]
			}];
  }

  ngOnInit() {
  }

}
