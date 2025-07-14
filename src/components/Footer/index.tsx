import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-3 flex justify-between items-center bg-orange-700 text-white">
            <p>© 2025 Zappo Enterprises</p>
            <div className="flex items-center">
                <Link href="/terms-conditions">Terms & Conditions</Link>
                &nbsp;{"|"}&nbsp;
                <Link href="/privacy-policy">Privacy Policy</Link>
                {/* &nbsp;{"|"}&nbsp; */}
                {/* <Link href="/refund-policy">Refund Policy</Link> */}
                &nbsp;{"|"}&nbsp;
                <Link href="/shipping-policy">Shipping Policy</Link>
            </div>
        </footer>
    );
};
export default Footer;
