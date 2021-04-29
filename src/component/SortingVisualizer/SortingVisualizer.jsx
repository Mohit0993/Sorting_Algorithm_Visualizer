import React,{Component} from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithum from '../SortingAlgo/mergeSort.js';
import * as sortingInsertion from '../SortingAlgo/insertionSort.js';
import * as sortingHeap from '../SortingAlgo/heapSort.js';
import {getQuickSortAnimations} from '../SortingAlgo/quickSort.js';
import {bubbleSortAnimations} from '../SortingAlgo/bubbleSort.js';

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
var NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
        this.state={
            array:[],

        };
    }

    componentDidMount(){
        this.genrateArray();
    }

    resetArray(){
       window.location.reload(false);
      this.genrateArray();
    }
    handleChange(evt) {
  //const { generateArray } = this.props;


  //console.log(evt.target.value);
  //NUMBER_OF_ARRAY_BARS=Math.floor((parseInt(evt.target.value) + 3) * 1.65);
  NUMBER_OF_ARRAY_BARS=evt.target.value;
  this.genrateArray();

  }
    handleChangeSpeed(evt) {
  //const { generateArray } = this.props;


  console.log("speed"+evt.target.value);
  //NUMBER_OF_ARRAY_BARS=Math.floor((parseInt(evt.target.value) + 3) * 1.65);
  ANIMATION_SPEED_MS=evt.target.value;


}
    genrateArray(){
        const array=[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromIntervals(90,550));
        }
        this.setState({array});
    }
    mergeSrt(){


        const javaScriptSortedArray=this.state.array.slice()
        .sort((a,b)=>a-b);

        const animations=sortingAlgorithum.mergeSort(this.state.array);

        console.log('Merge Sort');
        //console.log(arraysAreEqual(javaScriptSortedArray,sortedArray));


        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                this.state.array[barOneIdx]={newHeight};
              }, i * ANIMATION_SPEED_MS);
            }
          }

          console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));

    }

    quickSort() {
      const javaScriptSortedArray=this.state.array.slice()
        .sort((a,b)=>a-b);

    const animatingArray = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animatingArray.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const colorChange = i % 4 <= 1;
          if (colorChange) {
            const [barOneIdx, barTwoIdx] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animatingArray[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }

        console.log('Quick Sort');
          console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));
    }
    heapSortAnimations(){
        const javaScriptSortedArray=this.state.array.slice()
        .sort((a,b)=>a-b);


        const animations=sortingHeap.heapSortAnimations(this.state.array);

       // console.log(sortedArray);
        //console.log(arraysAreEqual(javaScriptSortedArray,sortedArray));
         for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 <= 1;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                this.state.array[barOneIdx]={newHeight};
              }, i * ANIMATION_SPEED_MS);
            }
          }
          console.log('Heap Sort');
          console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));
    }
    insertSort(){
      const javaScriptSortedArray=this.state.array.slice()
      .sort((a,b)=>a-b);

    //  const sortedArray=sortingInsertion.insertionSort(this.state.array);

      const animations=sortingInsertion.insertionSort(this.state.array);

     // console.log(sortedArray);
      //console.log(arraysAreEqual(javaScriptSortedArray,sortedArray));



      for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              this.state.array[barOneIdx]={newHeight};
            }, i * ANIMATION_SPEED_MS);
          }
        }


      console.log('Insertion Sort');
      //this.state.array[0]=0;
    console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));
    }

    bubbleSort(){
      const javaScriptSortedArray=this.state.array.slice()
      .sort((a,b)=>a-b);


      const animations = bubbleSortAnimations(this.state.array);

       for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 <= 1;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              this.state.array[barOneIdx]={newHeight};
            }, i * ANIMATION_SPEED_MS);
          }
        }
        console.log('Bubble Sort');
        console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));
    }

    render(){
        const {array}=this.state;
        const {cur}=this.state;
        return(

            <div classname="array-container">
            <br/>
            <div
              id="arraySize"
              class="arraySize"
              >
            Array Size
            </div>
              <input
                id="changeSize"
                type="range"
                min="10"
                max="100"
                onChange={this.handleChange}
              />
              <div
                id="arraySize2"
                class="arraySize"
                >
                Sorting Speed
              </div>
              <input
                id="changeSpeed"
                type="range"
                min="5"
                max="100"
                onChange={this.handleChangeSpeed}
              />

                <br/>
                <br/>
                <button className="buttonnewarray" onClick={()=> this.genrateArray()}> Generate New Array </button>
                <button className="button" onClick={()=> this.mergeSrt()}> Merge Sort</button>
                <button className="button" onClick={()=> this.quickSort()}> Quick Sort</button>
                <button className="button" onClick={()=> this.heapSortAnimations()}> Heap Sort </button>
                <button className="button" onClick={()=> this.insertSort()}> Insertion Sort </button>
                <button className="button" onClick={()=> this.bubbleSort()}> Bubble Sort </button>
                <button className="reset" onClick={()=> this.resetArray()}> Reset </button>





<br/>

<br/>
<div className="test">
            {array.map((value,idx)=>(
            <div className="array-bar" key={idx} style={{height: `${value}px`}}> </div>

                ))}
                </div>
                <br/>


            </div>
        );


    }


}
function randomIntFromIntervals(min,max){
    // min max included
    return Math.floor(Math.random()*(max-min+1)+min);
}
//unit test case function
function arraysAreEqual(arrOne,arrTwo){
    if (arrOne.length!==arrTwo.length) return false;
    for (let i =0;i<arrTwo.length;i++){
        if (arrOne[i]!== arrTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer;
