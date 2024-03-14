var b=Object.defineProperty;var s=(e,i)=>b(e,"name",{value:i,configurable:!0});import{j as t,a as n,R as y,r as x}from"./jsx-runtime-f76f309b.js";import{s as r,U as v}from"./styled-components.browser.esm-946f321d.js";import{S as w}from"./Simple-c9a21b09.js";const u=r.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  position: absolute;
`,f=r.label`
  position: relative;
  display: inline-block;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  margin-right: 0.3rem;
  margin-left: 0.3rem;
`,k=v`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`,S=r.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  top: 0em;
  left: -1.6em;
  border: 1px solid ${e=>e.theme.primary};
  border-radius: 0.2em;

  ${u}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${f}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${u}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid ${e=>e.theme.primary};
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${k};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;function m({value:e,checked:i,onChange:l,name:c,id:o,label:h,disabled:a}){return t("div",{children:n(f,{htmlFor:o,disabled:a,children:[t(u,{id:o,type:"checkbox",name:c,value:e,disabled:a,checked:i,onChange:l}),t(S,{})]})})}s(m,"Checkbox");try{m.displayName="Checkbox",m.__docgenInfo={description:"",displayName:"Checkbox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: any) => void"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}}}}}catch{}const V=r(m)`
  margin-right: 1rem;
  margin-left: 1rem;
`,q=r.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})``,C=s(({className:e})=>t(q,{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24",className:e,children:t("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),"RefreshIcon"),I=r(C)`
  user-select: none;
  width: 25px;
  height: 25px;
  display: inline-block;
  fill: currentcolor;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #fff;
`,_=r.div`
  margin: 0.5rem;
  width: 25rem;
  height: 25rem;
  border-color: ${e=>e.theme.primary};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`,$=r.div`
  width: calc(100% - 0.75rem);
  height: 1.75rem;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem 0.75rem;
  vertical-align: text-bottom;
  color: ${e=>e.theme.primary};
`,R=r.div`
  width: calc(25rem - 1rem);
  position: absolute;
  background-color: #fff;
  height: calc(100% - 1rem);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-family:
    Roboto Mono,
    Courier New,
    sans-serif;
  whitespace: pre-wrap;
  overflow: scroll;
`,z=r.div`
  borderbottom: 1px solid black;
  padding: 0.5rem 0 0.35rem 0;
  marginbottom: 0.5rem;
  fontfamily: sans-serif;
  color: gray;
`,D=r.div`
  color: ${e=>e.theme.primary};
  vertical-align: text-bottom;
  font-family: monospace;
`,N=r.button`
  display: inline-block;
  cursor: pointer;
  height: 26px;
  width: 26px;
  user-select: none;
  color: #ffffff;
  background-color: #3f51b5;
  margin: 0;
  padding: 0;
  user-select: none;
  border-radius: 6px;
  transition: 0.2s;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${e=>e.theme.primary};
  :hover {
    filter: brightness(70%);
    transition: 0.2s;
  }
  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`,p=class p extends y.Component{constructor(i){super(i),this.state={substance:i.substance,style:i.style,domain:i.domain,showDiagramInfo:!1,isSelected:this.props.selected??!1,currentState:void 0,variation:i.variation}}toggleView=()=>{this.setState({showDiagramInfo:!this.state.showDiagramInfo})};checkboxClick=()=>{this.setState({isSelected:!this.state.isSelected}),this.props.onSelected&&this.props.onSelected(this.props.gridIndex)};resample=()=>{this.setState({variation:Math.random().toString()})};render(){const{header:i,stateful:l,onSelected:c,onStateUpdate:o}=this.props,h=l?this.state.variation:this.props.variation;return n(_,{children:[n($,{children:[t(D,{children:i??"Diagram"}),n("div",{style:{display:"flex"},children:[this.props.stateful&&t(N,{onClick:this.resample,children:t(I,{})}),c&&t(V,{checked:this.state.isSelected,value:"",name:"",label:"",id:`checkbox-${this.props.gridIndex}`,disabled:!1,onChange:this.checkboxClick})]})]}),n("div",{onClick:this.toggleView,style:{height:"calc(100% - 2.75rem)",position:"relative"},children:[this.state.showDiagramInfo&&t(R,{children:this.props.metadata.map(({name:a,data:g})=>n("div",{children:[t(z,{children:a}),t("div",{style:{whiteSpace:"pre-line"},children:g})]},`gridbox-data-${a}`))}),x.createElement(w,{...this.props,variation:h,key:`gridbox-${this.props.gridIndex}`,name:`gridbox-${this.props.gridIndex}`,interactive:!1,onFrame:a=>{l&&(this.setState({currentState:a}),o!==void 0&&o(this.props.gridIndex,a))}})]})]},`gridbox-container-${this.props.gridIndex}`)}};s(p,"Gridbox");let d=p;try{d.displayName="Gridbox",d.__docgenInfo={description:"",displayName:"Gridbox",props:{domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"string"}},substance:{defaultValue:null,description:"",name:"substance",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"string"}},variation:{defaultValue:null,description:"",name:"variation",required:!0,type:{name:"string"}},excludeWarnings:{defaultValue:null,description:"",name:"excludeWarnings",required:!1,type:{name:"string[]"}},stepSize:{defaultValue:null,description:"",name:"stepSize",required:!1,type:{name:"number"}},interactive:{defaultValue:null,description:"",name:"interactive",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},onFrame:{defaultValue:null,description:"",name:"onFrame",required:!1,type:{name:"((frame: State) => void)"}},imageResolver:{defaultValue:null,description:"",name:"imageResolver",required:!1,type:{name:"PathResolver"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},gridIndex:{defaultValue:null,description:"",name:"gridIndex",required:!0,type:{name:"number"}},stateful:{defaultValue:null,description:"",name:"stateful",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!0,type:{name:"{ name: string; data: string; }[]"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:"((n: number) => void)"}},onStateUpdate:{defaultValue:null,description:"",name:"onStateUpdate",required:!1,type:{name:"((n: number, s: State) => void)"}}}}}catch{}const H={primary:"#40b4f7",secondary:"#C9C9C9"};export{d as G,H as p};
//# sourceMappingURL=penroseBlue-bdb40d77.js.map
