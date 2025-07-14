"use client";
import React from "react";

const ShippingPolicy = () => {
    return (
        <div className="mt-20 p-10 ml-64 mr-64 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Zappo Enterprises Shipping Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated on 04-04-2025 20:15:45</p>

            <p className="mb-6">
                At ZAPPO ENTERPRISES , we aim to provide efficient delivery services to our customers. For orders placed
                within India
            </p>
            <p className="mb-4">Free Shipping on all Prepaid orders. Charges of Rs. 1000 apply for COD orders. </p>
            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Delivery Timeframe</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                    All items purchased from our store are shipped and typically delivered within 6 to 8 days from the
                    order placement date and time.
                </li>
                {/* <li>
                    <strong>Express Shipping:</strong> 1–3 business days
                </li>
                <li>Orders are processed Monday–Friday (excluding holidays)</li>
                <li>You’ll get a tracking link once your order is shipped</li> */}
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Possible Delays</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                    While we strive to ensure timely delivery, please understand that occasional delays may occur due to
                    unforeseen circumstances beyond our control. We appreciate your patience and understanding in such
                    situations.
                </li>
                {/* <li>
                    <strong>Express Shipping:</strong> Calculated at checkout based on location
                </li>
                <li>Shipping costs are non-refundable unless there&apos;s a shipping error</li> */}
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Contact Us</h2>
            <p className="mb-4">
                If you have any questions or require assistance regarding your order or delivery, please don’t hesitate
                to reach out to us zagsup3@gmail.com, Our dedicated customer support team is here to help.
            </p>
            {/* <p className="mb-6">
                If your area is remote or out of delivery range, we’ll reach out to find the best solution.
            </p> */}

            <p className="mb-6">
                <strong>Return and Refund Policy</strong>
            </p>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Return Policy </h2>
            <ul className="list-disc mb-6 space-y-2">
                We have a 7 day return policy, which means you have 7 day after receiving your item to request a return.
                To be eligible for a return, your items must be in the damaged condition that you received it, unused,
                with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. raise a
                request by 24 hours To start a return, you can contact us at zagsup3@gmail.com
            </ul>

            {/* <h2 className="text-2xl font-semibold mt-10 mb-4">5. Damaged Packages</h2> */}
            <p className="mb-4">
                Please note that returns will need to be sent to the following - <br />
                ZAPPO ENTERPRISES,
                <br />
                B-9/405 GROUND FLOOR, ROHINI, SECTOR 3, Block-ROHINI,SECTOR 3, DELHI, NORTH WEST, Pin 110085
                {/* <a href="mailto:support@zappo.com" className="text-blue-600 underline">
                    support@zappo.com
                </a>
                . We’ll make it right. */}
            </p>

            {/* <h2 className="text-2xl font-semibold mt-10 mb-4">6. International Shipping</h2> */}
            <p className="mb-6">
                If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and
                where to send your package. items sent back to us without first requesting a return will not be
                accepted.
            </p>
            <p className="mb-4">You can always contact us for any return questions - zagsup3@gmail.com</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Exceptions / non-returnable items</h2>
            <p className="mb-6">
                Certain types of items cannot be returned, like bulk orders. Exchanges - If approved, Exchange of
                products will be processed and exchange products will be delivered by 2 days from the time/date after
                approval.
            </p>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Replacement</h2>
            <p className="mb-6">
                If approved, Replacement of products will be processed and replaced products will be delivered by 2 days
                from the time/date after approval.
            </p>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Refund Policy</h2>
            <p className="mb-6">
                We will notify you once we’ve received and inspected your return, and let you know if the refund was
                approved or not. If approved, you’ll be automatically refunded on your original payment method within 7
                business days. Please remember it can take some time for your bank or credit card company to process and
                post the refund too.
                <br />
                Once the refund is approved, amount will be credited to your bank account within 5-7 business days.
            </p>
            <p className="mb-3">
                If more than 7 business days have passed since we’ve approved your return, please contact us at
                zagsup3@gmail.com
            </p>

            {/* <p className="mt-12 text-sm text-gray-500">Zappo Enterprises reserves the right to update this policy at any time.</p> */}
        </div>
    );
};

export default ShippingPolicy;
