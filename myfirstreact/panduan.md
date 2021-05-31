npx create-react-app avowsviews 
avowsview test #note ini first time saya ngerjain front-end selama > 10 th coding
dan langsung react :p bahkan css dan html -un masih loading di otak saya. tapi gpp
cuzz kita mulai.
lanjut 
npm install jquery popper.js
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons 
npm install @fortawesome/free-regular-svg-icons 
npm i --save @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome
npm install react-bootstrap
npm install classname
//import bootstarp dan kawannya tambahkan :

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

npm install react-table@6.11.5 --save


note tentang renderer 
{
  // Row-level props
  row: Object, // the materialized row of data
  original: , // the original row of data
  index: '', // the index of the row in the original array
  viewIndex: '', // the index of the row relative to the current view
  level: '', // the nesting level of this row
  nestingPath: '', // the nesting path of this row
  aggregated: '', // true if this row's values were aggregated
  groupedByPivot: '', // true if this row was produced by a pivot
  subRows: '', // any sub rows defined by the `subRowKey` prop

  // Cells-level props
  isExpanded: '', // true if this row is expanded
  value: '', // the materialized value of this cell
  resized: '', // the resize information for this cell's column
  show: '', // true if the column is visible
  width: '', // the resolved width of this cell
  maxWidth: '', // the resolved maxWidth of this cell
  tdProps: '', // the resolved tdProps from `getTdProps` for this cell
  columnProps: '', // the resolved column props from 'getProps' for this cell's column
  classes: '', // the resolved array of classes for this cell
  styles: '' // the resolved styles for this cell
}

fix error axio proxy
npm install axios axios-https-proxy-fix

npm install react-bootstrap-icons --save

npm install react-chartjs-2 chart.js
    
