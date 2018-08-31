import React from "react";

class ReactImageCropper extends React.Component {
  state = { selectedFile: null };

  fileChangedHandler = e => {
    console.log(e.target.files[0]);
    const imageObjectUrl = URL.createObjectURL(e.target.files[0]);
    this.setState({ selectedFile: imageObjectUrl });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="react-image-cropper">
          <div className="row">
            <div className="col-12 py-2">
              <input type="file" onChange={this.fileChangedHandler} />
            </div>
          </div>
          <div className="row">
            <div />
            <img src={this.state.selectedFile} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactImageCropper;
