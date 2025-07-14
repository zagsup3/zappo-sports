"use client";
const Contact = () => {
    return (
        <section className="m-auto p-5 min-h-screen">
            <h1 className="font-bold text-2xl mb-4">Get in Touch</h1>
            <div className="flex justify-center">
                <div className="p-4 max-w-fit mb-24 mt-10">
                    <p>
                        <strong>Merchant Legal entity name:</strong> Deepak Kumar
                    </p>
                    <p>
                        <strong>Registered Address:</strong> G-11/69, Rohini Sector 15, Delhi, PIN: 110089
                    </p>
                    <p>
                        <strong>Operational Address:</strong> G-11/69, Rohini Sector 15, Delhi, PIN: 110089
                    </p>
                    <p>
                        <strong>Telephone No:</strong> 9997761190
                    </p>
                    <p>
                        <strong>E-Mail ID:</strong> anujgarg000999@gmail.com
                    </p>
                </div>
                <div className="p-4 max-w-fit shadow-2xl rounded mb-24 mt-10">
                    <div className="flex justify-between items-center gap-4 mb-4">
                        <input className="w-48 border-2 border-blue-950 p-2 rounded" placeholder="First Name" />
                        <input className="w-48 border-2 border-blue-950 p-2 rounded" placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                        <input placeholder="Email" className="w-[400px] border-2 border-blue-950 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Message"
                            style={{ resize: "none" }}
                            className="w-[400px] border-2 border-blue-950 p-2 rounded"
                        />
                    </div>
                    <button className="bg-orange-700 text-white rounded p-4 w-[400px] cursor-pointer">Submit</button>
                </div>
            </div>
        </section>
    );
};
export default Contact;
