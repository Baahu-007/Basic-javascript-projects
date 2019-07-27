document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector("#erase").onclick =()=>{
      // alert("Oh yeah");
      svg.style('fill',white);
    }
    document.querySelector('#setcolor').onchange = () =>{
      draw_point2()
    }
    document.querySelector('#brush-width').onchange = () =>{
     var d1 = document.querySelector('#brush-width')
     var wid = d1.options[d1.selectedIndex].text
     draw_point2(wid)
   }


});


// here was the previous code
function draw_point2(elemi){
  var d = document.querySelector('#setcolor')
  let colour = d.options[d.selectedIndex].innerHTML;
  console.log(colour)

  // if(document.querySelector("#erase").onclick =>{
  //   colour="white"
  // })
  // console.log(colour)

  console.log(elemi)
  const svg = d3.select("#svg");
  let drawing = false;
  function draw_point(){
    // colour = document.querySelector('select').value
    // console.log(colour)
    // const svg = d3.select("#svg");
    // let drawing = false;
    if (!drawing)
      return
    const cords = d3.mouse(this);
    console.log(colour)
    svg.append('circle')
        .attr('cx', cords[0])
        .attr('cy', cords[1])
        .attr('r', elemi)
        .style('fill',colour)

  }

  svg.on('mousedown', ()=>{
    drawing = true;
    svg.append('line')
        .attr('x2', cords[0])
        .attr('y2', cords[1])
        .attr('stroke-width', elemi)
        .style('stroke',colour)
  })

  svg.on('mouseup', ()=>{
    drawing = false;
  })
  svg.on('mousemove',draw_point);
}
