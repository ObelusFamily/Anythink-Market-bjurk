import React from "react";


const SearchInput = (props) => {
  

  if (props.show) {
    return (
      <span className="">
        <input type="text"></input>
      </span>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(SearchInput);