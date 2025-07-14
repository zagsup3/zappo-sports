"use client";
import React from "react";

const RefundPolicy = () => {
    return (
        <div className="mt-20 p-10 ml-64 mr-64 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Zappo Enterprises Refund Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated on 04-04-2025 20:15:45</p>

            <p className="mb-6">
                At <strong>Zappo Enterprises</strong>, we want you to love your purchase. If something isn&apos;t right,
                we’ll do our best to make it right. Here&apos;s how our refund policy works:
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Returns & Exchanges</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                    You can return or exchange most items within <strong>30 days</strong> of receiving them.
                </li>
                <li>
                    Items must be unused, in their original condition, and in original packaging (with tags, if
                    applicable).
                </li>
                <li>Proof of purchase (like your order number or receipt) is required.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Non-Returnable Items</h2>
            <p className="mb-4">We can’t accept returns on the following:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Used or worn items</li>
                <li>Gift cards</li>
                <li>Final sale items</li>
                <li>Personal hygiene items (like socks, water bottles, etc.)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Refunds</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Once we receive your return, we’ll inspect it and let you know if your refund is approved.</li>
                <li>
                    If approved, your refund will go back to your original payment method within 5–10 business days.
                </li>
                <li>Shipping charges are non-refundable unless the item was damaged or incorrect.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Exchanges</h2>
            <p className="mb-6">
                Need a different size or color? You can exchange your item (subject to availability) or request a store
                credit instead of a refund.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Damaged or Wrong Items</h2>
            <p className="mb-6">
                Received the wrong item or something damaged? Sorry about that! Please contact us within 7 days of
                receiving it, and we’ll make it right.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. How to Start a Return</h2>
            <p className="mb-6">
                Email us at{" "}
                <a href="mailto:support@zappo.com" className="text-blue-600 underline">
                    support@zappo.com
                </a>{" "}
                with your order number and the reason for the return. We&apos;ll guide you from there!
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Still Have Questions?</h2>
            <p className="mb-6">
                Reach out anytime! We’re here to help at{" "}
                <a href="mailto:support@zappo.com" className="text-blue-600 underline">
                    support@zappo.com
                </a>{" "}
                or call us at [Your Support Number].
            </p>

            <p className="mt-12 text-sm text-gray-500">
                Zappo Enterprises reserves the right to update this policy at any time.
            </p>
        </div>
    );
};

export default RefundPolicy;
