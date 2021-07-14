import React from "react";

class MenuDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.props.match.params.menuId}`
    )
      .then((response) => response.json())
      .then((item) => this.setState({ menu: item }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.menuId !== this.props.match.params.menuId) {
      fetch(
        `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.props.match.params.menuId}`
      )
        .then((response) => response.json())
        .then((item) => this.setState({ menu: item }));
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <h4>Items in Category: {this.props.match.params.menuId}</h4>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.menu.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuDetailPage;
