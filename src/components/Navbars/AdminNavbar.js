/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';

import { dashboardRoutes } from 'routes';

function Header({ handleLogout, notifications }) {
    const location = useLocation();
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle('nav-open');
        const node = document.createElement('div');
        node.id = 'bodyClick';
        node.onclick = () => {
            // eslint-disable-next-line react/no-this-in-sfc
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle('nav-open');
        };
        document.body.appendChild(node);
    };
    const getBrandText = () => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < dashboardRoutes.length; i++) {
            if (
                location.pathname.indexOf(
                    dashboardRoutes[i].layout + dashboardRoutes[i].path,
                ) !== -1
            ) {
                return dashboardRoutes[i].name;
            }
        }
        return 'Brand';
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    <Button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={mobileSidebarToggle}
                    >
                        <i className="fas fa-ellipsis-v"></i>
                    </Button>
                    <Navbar.Brand
                        href="#home"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                        {getBrandText()}
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="mr-2"
                >
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                                as={Nav.Link}
                                data-toggle="dropdown"
                                id="dropdown-67443507"
                                variant="default"
                                className="m-0"
                            >
                                <i className="nc-icon nc-planet"></i>
                                <span className="notification">
                                    {notifications?.newNotification?.data
                                        ?.length || 0}
                                </span>
                                <span className="ml-1">Notification</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {notifications?.newNotification?.data?.map(
                                    (n, index) => (
                                        <Dropdown.Item
                                            key={index}
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            style={{
                                                cursor: 'default',
                                            }}
                                        >
                                            <Link
                                                style={{
                                                    color: '#3472f7',
                                                    cursor: 'pointer',
                                                }}
                                                to={`/admin/notification-detail/${n.uuid}`}
                                            >
                                                {n.title}
                                            </Link>
                                        </Dropdown.Item>
                                    ),
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#logout"
                                onClick={(e) => handleLogout(e)}
                            >
                                <span className="no-icon">Log out</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
