import React, { PureComponent } from 'react';
// eslint-disable-next-line
import SVG from 'react-inlinesvg';
import Logo from 'Assets/logo.svg';
import PropTypes from 'prop-types';
import { Box, Text, Collapsible } from 'grommet';
import {
  Filter,
  FormNext,
  FormPrevious,
  Up,
  Descend as Sort,
  AddCircle,
  Archive,
  Pin,
  Configure,
} from 'grommet-icons';
import BoardsIcon from 'UI/BoardsIcon';
import classnames from 'classnames';
import Tooltip from 'UI/Tooltip';
import Button from 'UI/Button';
import GistSync from 'Containers/GistSync';
import Favs from 'Containers/Favs';
import LabelFilter from 'UI/LabelFilter';
import {
  SORTING_BY_TITLE,
  SORTING_BY_DATE,
  ASCENDING_ORDER,
  DESCENDING_ORDER,
} from 'Utils/globals';

import './Sidebar.scss';

class Sidebar extends PureComponent {
  state = {
    sortingOptionsExpanded: false,
    favsExpanded: false,
    labelFiltersExpanded: false,
  };

  getSortingOrder = (targetSorting) => {
    const { sorting, order } = this.props;
    const activeSorting = sorting;
    if (targetSorting === activeSorting) {
      return order === ASCENDING_ORDER ? DESCENDING_ORDER : ASCENDING_ORDER;
    }
    return ASCENDING_ORDER;
  };

  expandMenu() {
    const { toggleSidebar } = this.props;
    toggleSidebar();
  }

  expandLabelFilters() {
    const { labelFiltersExpanded } = this.state;
    this.setState({
      labelFiltersExpanded: !labelFiltersExpanded,
    });
  }

  expandSortingOptions() {
    const { sortingOptionsExpanded } = this.state;
    this.setState({
      sortingOptionsExpanded: !sortingOptionsExpanded,
    });
  }

  expandFavs() {
    const { favsExpanded } = this.state;
    this.setState({
      favsExpanded: !favsExpanded,
    });
  }

  collapsedSidebar() {
    const {
      addCard,
      toggleBoardsDialog,
      toggleSettings,
      activeBoard,
      toggleArchivedFilter,
      archivedFilterOn,
    } = this.props;
    return (
      <Box>
        <Box direction="column" align="end" width="100%">
          <Tooltip
            icon={<AddCircle color="brand" />}
            className={classnames('sidebar-tooltip', 'add-note-btn')}
            title="Add card"
            text="Add card (Use 'A' hotkey)"
            onClick={() => {
              addCard(activeBoard);
            }}
          />
          <Tooltip
            icon={<BoardsIcon color="brand" />}
            className="sidebar-tooltip"
            title="Manage boards"
            text="Add, delete or edit boards"
            onClick={() => {
              toggleBoardsDialog();
            }}
          />
          <Tooltip
            className="sidebar-tooltip"
            icon={<Pin color="brand" />}
            title="Favorites"
            text="Open your favorites and quickly focus on them"
            onClick={() => {
              this.expandMenu();
              this.expandFavs();
            }}
          />
          <Tooltip
            className="sidebar-tooltip"
            icon={<Archive color={archivedFilterOn ? 'accent-3' : 'brand'} />}
            title="Show Archive"
            text="See your archived cards"
            onClick={() => {
              toggleArchivedFilter(!archivedFilterOn);
            }}
          />
          <Tooltip
            className={classnames('sidebar-tooltip', 'sort-icon')}
            icon={<Sort color="brand" />}
            title="Sort cards"
            text="Open sorting options"
            onClick={() => {
              this.expandMenu();
              this.expandSortingOptions();
            }}
          />
          <Tooltip
            className="sidebar-tooltip"
            icon={<Configure color="brand" />}
            title="Settings"
            text="Open MDyna settings interface"
            onClick={() => {
              toggleSettings();
            }}
          />
          <Tooltip
            className="sidebar-tooltip"
            icon={<Filter color="brand" />}
            title="Filter cards"
            text="Filter cards by label"
            onClick={() => {
              this.expandMenu();
              this.expandLabelFilters();
            }}
          />
        </Box>
      </Box>
    );
  }

  expandedSidebar() {
    const {
      activeBoard,
      addCard,
      addLabelFilter,
      archivedFilterOn,
      changeSorting,
      clearArchive,
      labelFilters,
      labels,
      order,
      removeLabelFilter,
      lastSyncDate,
      githubAuthOn,
      sorting,
      toggleArchivedFilter,
      toggleBoardsDialog,
      toggleSettings,
    } = this.props;
    const {
      sortingOptionsExpanded,
      labelFiltersExpanded,
      favsExpanded,
    } = this.state;
    const labelFilterFuncs = { addLabelFilter, removeLabelFilter };

    return (
      <Box direction="column" align="start">
        <Button
          hoverIndicator="accent-1"
          onClick={() => addCard(activeBoard)}
          className="add-note-btn"
        >
          <AddCircle color="brand" />
          <Text className="menu-label">Add Card</Text>
        </Button>
        <Button hoverIndicator="accent-1" onClick={() => toggleBoardsDialog()}>
          <BoardsIcon color="brand" />
          <Text className="menu-label">Boards</Text>
        </Button>

        <Button
          hoverIndicator="accent-1"
          plain
          onClick={() => this.expandFavs()}
        >
          <Pin color="brand" />
          <Text className="menu-label">Favorites</Text>
        </Button>
        <Box className="expandable-menu" background="dark-1">
          <Collapsible direction="vertical" open={favsExpanded}>
            <Favs />
          </Collapsible>
        </Box>
        <Button
          onClick={() => toggleArchivedFilter(!archivedFilterOn)}
          color={(archivedFilterOn && 'accent-3') || 'brand'}
          hoverIndicator="accent-1"
        >
          <Archive color={archivedFilterOn ? 'accent-3' : 'brand'} />
          <Text className="menu-label">Archive</Text>
        </Button>

        <Box className="expandable-menu sub-menu" background="dark-1">
          <Collapsible direction="vertical" open={archivedFilterOn}>
            <Button hoverIndicator="accent-2" onClick={() => clearArchive()}>
              Clear Archive
            </Button>
          </Collapsible>
        </Box>
        <Button
          hoverIndicator="accent-1"
          onClick={() => this.expandSortingOptions()}
        >
          <Sort color="brand" className="sort-icon" />
          <Text className="menu-label">Sort Cards </Text>
        </Button>

        <Box className="expandable-menu sub-menu" background="dark-1">
          <Collapsible direction="vertical" open={sortingOptionsExpanded}>
            <Button
              color={(sorting === SORTING_BY_TITLE && 'accent-3') || 'brand'}
              hoverIndicator="accent-1"
              onClick={() => changeSorting(
                SORTING_BY_TITLE,
                this.getSortingOrder(SORTING_BY_TITLE),
              )
              }
            >
              <Up
                color={(sorting === SORTING_BY_TITLE && 'accent-3') || 'brand'}
                className={classnames(
                  order === DESCENDING_ORDER && 'descending',
                )}
              />
              By Title
            </Button>
            <Button
              hoverIndicator="accent-1"
              onClick={() => changeSorting(
                SORTING_BY_DATE,
                this.getSortingOrder(SORTING_BY_DATE),
              )
              }
              color={(sorting === SORTING_BY_DATE && 'accent-3') || 'brand'}
            >
              <Up
                color={(sorting === SORTING_BY_DATE && 'accent-3') || 'brand'}
                className={classnames(
                  order === DESCENDING_ORDER && 'descending',
                )}
              />
              By Date
            </Button>
          </Collapsible>
        </Box>
        <Button
          hoverIndicator="accent-1"
          plain
          onClick={() => toggleSettings()}
        >
          <Configure color="brand" />
          <Text className="menu-label">Settings</Text>
        </Button>
        <Button
          hoverIndicator="accent-1"
          plain
          onClick={() => this.expandLabelFilters()}
        >
          <Filter color="brand" />
          <Text className="menu-label">Filter Labels</Text>
        </Button>
        <Box className="expandable-menu" background="dark-1">
          <Collapsible direction="vertical" open={labelFiltersExpanded}>
            <LabelFilter
              labels={labels}
              labelFilters={labelFilters}
              labelFilterFuncs={labelFilterFuncs}
            />
          </Collapsible>
        </Box>

        <GistSync
          lastSyncDate={lastSyncDate}
          githubAuthOn={githubAuthOn}
          onClick={() => {
            toggleSettings();
          }}
        />
        <Box direction="column">
          <Text size="small" className="help">
            Keyboard Shortcuts
            <Tooltip data="keyboard-shortcuts" />
          </Text>
        </Box>
      </Box>
    );
  }

  render() {
    const {
      sidebarExpanded, toggleSidebar, toggleSettings, lastSyncDate, githubAuthOn,
    } = this.props;

    return (
      <Box
        className={classnames('sidebar', sidebarExpanded && 'expanded')}
        direction="column"
        alignContent="end"
        background="dark-2"
      >
        <Box direction="row" className="menu-controller">
          {sidebarExpanded ? (
            <Button
              hoverIndicator="accent-1"
              onClick={() => toggleSidebar()}
              className="title-button"
            >
              <FormPrevious color="brand" />
              <Text size="large">
                <SVG src={Logo} style={{ width: 32 }} />
                MDyna
              </Text>
            </Button>
          ) : (
            <Button
              hoverIndicator="accent-1"
              onClick={() => toggleSidebar()}
              className="title-button"
            >
              <FormNext color="brand" />
            </Button>
          )}
        </Box>
        {sidebarExpanded ? this.expandedSidebar() : this.collapsedSidebar()}
        {!sidebarExpanded && (
          <GistSync
            lastSyncDate={lastSyncDate}
            githubAuthOn={githubAuthOn}
            badge
            skipLogin
            classname="sidebar-tooltip"
            onClick={() => {
              toggleSettings();
            }}
          />
        )}
      </Box>
    );
  }
}

Sidebar.whyDidYouRender = true;

Sidebar.propTypes = {
  activeBoard: PropTypes.string,
  addCard: PropTypes.func.isRequired,
  addLabelFilter: PropTypes.func.isRequired,
  archivedFilterOn: PropTypes.bool,
  changeSorting: PropTypes.func.isRequired,
  clearArchive: PropTypes.func.isRequired,
  labelFilters: PropTypes.array,
  lastSyncDate: PropTypes.object,
  githubAuthOn: PropTypes.bool.isRequired,
  labels: PropTypes.array,
  order: PropTypes.string,
  removeLabelFilter: PropTypes.func.isRequired,
  sidebarExpanded: PropTypes.bool,
  sorting: PropTypes.string,
  toggleArchivedFilter: PropTypes.func.isRequired,
  toggleBoardsDialog: PropTypes.func.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  lastSyncDate: null,
  activeBoard: 'INBOX',
  archivedFilterOn: false,
  labelFilters: [],
  labels: [],
  order: DESCENDING_ORDER,
  sidebarExpanded: false,
  sorting: SORTING_BY_DATE,
};

export default Sidebar;
