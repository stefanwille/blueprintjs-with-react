import React, { Component } from 'react';

import {
  Icon,
  Intent,
  Spinner,
  Card,
  Button,
  FormGroup,
  Label,
  Menu,
  MenuItem,
  MenuDivider
} from '@blueprintjs/core';
import { Table, Column, Cell } from '@blueprintjs/table';

import './App.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

class App extends Component {
  render() {
    const renderCell = (rowIndex: number) => (
      <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    );
    return (
      <div className="App">
        <div className="pt-callout modifier pt-intent-danger">
          <h5 className="pt-callout-title">Callout Heading</h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
          delectus!
        </div>
        <div className=".modifier">
          <p>
            Longform text, such as rendered Markdown documents, benefit from
            additional spacing and slightly large font size. Apply{' '}
            <code>.pt-running-text</code> to the parent element to adjust
            spacing for the following elements:
          </p>
          <ul>
            <li>
              <code>&lt;p></code> tags have increased line-height and font size.
            </li>
            <li>
              <code>&lt;h*></code> tag margins are adjusted to provide clear
              separation between sections in a document.
            </li>
            <li>
              <code>&lt;ul></code> and <code>&lt;ol></code> tags receive
              [`.pt-list`](#typography.lists) styles for legibility.
            </li>
          </ul>
          <h3>New section</h3>
          <p>And another paragraph.</p>
        </div>
        <h1>H1 heading</h1>
        <h2>H2 heading</h2>
        <h3>H3 heading</h3>
        <h4>H4 heading</h4>
        <h5>H5 heading</h5>
        <h6>H6 heading</h6>
        <Spinner intent={Intent.WARNING} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card interactive={true} elevation={Card.ELEVATION_TWO}>
          <h5>
            <a href="#">Card heading</a>
          </h5>
          <p>Card content</p>
          <FormGroup
            helperText="Helper text with details..."
            label="Label A"
            labelFor="text-input"
            required={true}
          >
            <input
              type="text"
              className="pt-input pt-intent-success"
              placeholder="Placeholder text"
            />
          </FormGroup>
          <Label
            helperText="Helper text with details..."
            text="Label A"
            required={true}
          >
            <input
              className="pt-input"
              id="text-input"
              placeholder="Placeholder text"
            />
          </Label>
          <Button
            onClick={() => console.log('wwwwwwayyy coooool!')}
            intent={Intent.SUCCESS}
          >
            Submit
          </Button>{' '}
          <Button
            onClick={() => console.log('Goooood stuuuuffff!')}
            intent={Intent.WARNING}
          >
            <Icon icon="add" iconSize={20} intent={Intent.DANGER} /> Submit
          </Button>
        </Card>
        <Table numRows={10}>
          <Column name="Dollars" renderCell={renderCell} />
        </Table>
        <Menu>
          <MenuItem text="New" />
          <MenuItem text="Open" />
          <MenuItem text="Save" />
          <MenuDivider />
          <MenuItem text="Settings..." />
        </Menu>
        <hr />
        <Icon icon="add" iconSize={20} intent={Intent.DANGER} />
        <Icon icon="cross" />
        <Icon icon="globe" iconSize={20} />

        <hr />
      </div>
    );
  }
}

export default App;
