import React, { Component } from 'react';
import styles from './NavBar.module.css';

interface NavBarState {
  isMobile: boolean;
  isOpen: boolean;
}

class NavBar extends Component<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMobile: false,
      isOpen: false
    };
  }

  componentDidMount() {
    this.updateViewport();
    window.addEventListener('resize', this.updateViewport);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewport);
  }

  updateViewport = () => {
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint according to your needs
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isMobile, isOpen } = this.state;

    // Conditionally render the component based on viewport size
    if (isMobile) {
      return (
        <>
          <div>
            <header className={isOpen ? styles.black : ''}>
              <div className={`${styles.row} ${styles.container}`}>
                <div className={styles['col-6']}>
                  <div className={styles.menu} onClick={this.toggleMenu}>
                    <a href="#">
                      <span className={isOpen ? styles.iconActive : ''}>Menu</span>
                    </a>
                  </div>
                </div>

                <div className={`${styles['col-6']} ${styles.logo}`}>
                    <img src="/public/icon_transparent_bg.png" alt="Logo" className={styles.logoImg} />
                </div>

                {isOpen && (
                  <ul className={styles.dropdown}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                )}
              </div>
            </header>
          </div>
        </>
      );
    }

    return (
      <div>Desktop Version</div>
    );
  }
}

export default NavBar;
