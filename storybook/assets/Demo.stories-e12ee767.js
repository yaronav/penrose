var u=Object.defineProperty;var s=(e,o)=>u(e,"name",{value:o,configurable:!0});import{r as m,j as a}from"./jsx-runtime-7cbe1778.js";import{S as g}from"./Simple-693a0abb.js";import{v as n,a as r}from"./PenrosePrograms-e6acd945.js";import"./iframe-8830d19c.js";import"./svg-fa10b444.js";import"./vector-wedge.substance-00c05a9a.js";const i=s(e=>{const[o,l]=m.useState(0);m.useEffect(()=>{const c=window.setInterval(()=>l(d=>(d+1)%e.examples.length),5e3);return()=>clearInterval(c)},[o]);const t=e.examples[o];return a(g,{name:"demo",substance:t.sub,style:t.sty,domain:t.dsl,variation:t.variation,interactive:!1,animate:!0,stepSize:t.stepSize,imageResolver:t.imageResolver,excludeWarnings:[]})},"Demo"),p=i;try{i.displayName="Demo",i.__docgenInfo={description:"",displayName:"Demo",props:{examples:{defaultValue:null,description:"",name:"examples",required:!0,type:{name:"{ sub: string; sty: string; dsl: string; variation: string; stepSize?: number | undefined; imageResolver?: PathResolver | undefined; }[]"}},darkMode:{defaultValue:null,description:"",name:"darkMode",required:!0,type:{name:"boolean"}}}}}catch{}const P={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import Demo from "../Demo.js";
import { vectorWedge, vectorsPerp } from "./PenrosePrograms.js";

// const diagram = await getDiagram();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Demo Component",
  component: Demo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Demo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Demo> = (args) => (
  <div style={{ width: "400px", height: "400px" }}>
    <Demo {...args} />
  </div>
);

export const VectorExamples = Template.bind({});
VectorExamples.args = {
  examples: [
    {
      sub: vectorsPerp.substance,
      sty: vectorsPerp.style,
      dsl: vectorsPerp.domain,
      variation: vectorsPerp.variation,
    },
    {
      sub: vectorWedge.substance,
      sty: vectorWedge.style,
      dsl: vectorWedge.domain,
      variation: vectorWedge.variation,
    },
  ],
};
`,locationsMap:{"vector-examples":{startLoc:{col:46,line:18},endLoc:{col:1,line:22},startBody:{col:46,line:18},endBody:{col:1,line:22}}}}},title:"Example/Demo Component",component:p},v=s(e=>a("div",{style:{width:"400px",height:"400px"},children:a(p,{...e})}),"Template"),y=v.bind({});y.args={examples:[{sub:n.substance,sty:n.style,dsl:n.domain,variation:n.variation},{sub:r.substance,sty:r.style,dsl:r.domain,variation:r.variation}]};const S=["VectorExamples"];export{y as VectorExamples,S as __namedExportsOrder,P as default};
//# sourceMappingURL=Demo.stories-e12ee767.js.map
