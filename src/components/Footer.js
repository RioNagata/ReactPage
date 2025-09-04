function Footer(){
    return (
    <>
        <footer className="footers">
        <div className="footer">
                <div className="footerlinks">
                    <ul>
                        <li className="footertitle"><a href="/">Main Menu</a></li>
                    </ul>
                </div>
                <div className="footerlinks">
                    <ul>
                        <li className="footertitle"><a href='/projects'>Projects</a></li>
                        <br></br>
                        <li><a href="/hiraganafun">Hiragana Fun</a></li>
                        <li><a href="/vehicle">Vehicle</a></li>
                        <li><a href="/chat">ChatChannel</a></li>
                        <li><a href="/gamereport">Game Report</a></li>
                    </ul>
                </div>
                <div className="footerlinks">
                    <ul>
                        <li className="footertitle"><a href='/contact'>About Me</a></li>
                    </ul>
                </div>
                <div className="footerlinks">
                    <ul>
                        <li className="footertitle"><a href='/contact'>Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p>&#169; Rio Nagata. <script type="text/javascript">document.write(new Date().getFullYear());
</script> All rights Reserved.</p>
            </div>
        </footer>
    </>
    );
}
export default Footer;