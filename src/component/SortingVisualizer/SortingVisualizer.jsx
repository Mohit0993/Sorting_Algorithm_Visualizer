import React,{Component} from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithum from '../SortingAlgo/mergeSort.js';
import * as sortingHeap from '../SortingAlgo/heapSort.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 110;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends Component{
    constructor(props){
        super(props);

        this.state={
            array:[],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array=[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromIntervals(50,650));
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
    quickSort(){

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
          console.log('heapSort');
          console.log(arraysAreEqual(javaScriptSortedArray,this.state.array));
    }

    render(){
        const {array}=this.state;
        return(

            <div classname="array-container">
                <br/>
<button onClick={()=> this.resetArray()}> Generate New Array </button>
                <button onClick={()=> this.mergeSrt()}> Merge Sort</button>
                <button onClick={()=> this.quickSort()}> Quick Sort</button>
                <button onClick={()=> this.heapSortAnimations()}> Heap Sort </button>
                <button onClick={()=> this.insertSort()}> Insertion Sort </button>
                <button onClick={()=> this.heapSort()}> Bubble Sort </button>
                <button onClick={()=> this.resetArray()}> Reset </button>


<br/>
<br/>
<br/>

            {array.map((value,idx)=>(
            <div className="array-bar" key={idx} style={{height: `${value}px`}} >

            </div>

                ))}
                <br/>


            </div>
        );


    }


}
function randomIntFromIntervals(min,max){
    // min max included
    return Math.floor(Math.random()*(max-min+1)+min);
}
function arraysAreEqual(arrOne,arrTwo){
    if (arrOne.length!==arrTwo.length) return false;
    for (let i =0;i<arrTwo.length;i++){
        if (arrOne[i]!== arrTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer;
