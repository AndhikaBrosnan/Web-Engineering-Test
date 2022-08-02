import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("App page Test", () => {
  const wrapper = shallow(<App />);
  console.log("App Debug: ", wrapper.debug());
});
