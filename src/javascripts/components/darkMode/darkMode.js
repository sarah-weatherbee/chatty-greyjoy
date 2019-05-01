import util from '../../helpers/util';
import navBar from '../navBar/navBar';

const bodyDivCaller = () => {
  let domString = '';
  domString += '<div id="navBarPrint"></div>';
  domString += '<div id="msgPrintingDiv"></div>';
  util.printToDom('bodyDivBuild', domString);
  navBar.navBarBuilder();
};

export default { bodyDivCaller };
