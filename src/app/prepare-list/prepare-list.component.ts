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
  selector: 'app-prepare-list',
  templateUrl: './prepare-list.component.html',
  styleUrls: ['./prepare-list.component.css']
})
export class PrepareListComponent implements OnInit {
	private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    showTodayBtn: true,
    minYear: 2017,
    maxYear: 2019,
    openSelectorOnInputClick: true,
    inline: false,
    editableDateField: false,
    //disableUntil: { year: 2017, month: 7, day: 25 },
    //disableDays: [{ year: 2017, month: 7, day: 27 }, { year: 2017, month: 8, day: 15 }]
  };
	isLogin: boolean = true;

  nodes = [];
  constructor() {
    this.nodes = [{
			id: 1,
			name: '1. Sets',
			date: '2017-10-19',
			status: '2',
      		published: false,
			children: [{
				name: '1.1 Sets and their representations',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '1.2 Types of Sets',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '1.3 Operation on sets',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '1.4 Venn Diagrams',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		}, 

			{
			id: 2,
			name: '3. Trigonometric Functions',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '3.1 Angle',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '3.2 Definition of trigonometric functions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.3 Signs of trigonometric functions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.4 Trigonometric functions of sum and difference of two angles',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.5 Trigonometric ratios of multiple angles',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.6 General solution',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.7 Proofs and Simple Solutions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},



		{
			id: 3,
			name: '4. Principle of Mathematical Induction',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '4.1 Proof by Induction',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '3.2 Definition of trigonometric functions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.3 Signs of trigonometric functions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.4 Trigonometric functions of sum and difference of two angles',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},
		{
			id: 4,
			name: '4. Principle of Mathematical Induction',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '4.1 Proof by Induction',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}]
		},
		{
			id: 5,
			name: '5. Complex Numbers and Quadratic Equations',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '5.1 Need for complex numbers',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '5.2 Argand plane and polar representation',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '5.3 Statement of Fundamental Theorem of Algebra',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '5.4 Square-root of a Complex number',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},
		{
			id: 6,
			name: '6. Linear Inequalities',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '6.1 Algebraic solutions',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '6.2 Graphical solutions',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '6.3 Solution of system of linear inequalities',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '3.4 Trigonometric functions of sum and difference of two angles',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},
		{
			id: 7,
			name: '7. Permutations and Combinations',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '7.1 Fundamental principle of counting',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '7.2 Factorial n',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '7.3 Permutations',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '7.4 Combinations',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},
		{
			id: 8,
			name: '8. Binomial Theorem',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '8.1 Statement',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '8.2 Pascal’s triangle',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '8.3 General and Middle Term',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		},
		{
			id: 9,
			name: '9. Sequence and Series',
			date: '2017-08-19',
			status: '2',
      		published: false,
			children: [{
				name: '9.1 Definition',
				date: '2017-08-20',
				status: '3',
        		published: false,
			}, {
				name: '9.2 Arithmetic Progression',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '9.3 Arithmetic Mean',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '9.4 Geometric Progression',
				status: '0',
				date: '2017-08-20',
        		published: false,
			},
			{
				name: '9.5 Sum to n terms',
				status: '0',
				date: '2017-08-20',
        		published: false,
			}]
		}];
  }

  ngOnInit() {
  }

}



