import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content mt-80">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">App Making</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Other Services</span>
                    <a class="link link-hover">App Marketing</a>
                    <a class="link link-hover">Resource Building</a>
                    <a class="link link-hover">Making policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;