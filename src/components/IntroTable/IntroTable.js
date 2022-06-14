import React from 'react';
import './IntroTable.css'

const IntroTable = () => {
    return (
        <div>
            <div className='mt-5 intro-container'>
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th className='text-center' colspan="4" scope="col">এক নজরে বিদ্যালয়ের পরিচিতি</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">বিদ্যালয়ের EIIN :</th>
                            <td>361829</td>
                        </tr>
                        <tr>
                            <th scope="row">বিদ্যালয়ের নাম :</th>
                            <td>Amar high school</td>
                        </tr>
                        <tr>
                            <th scope="row">জেলা :	</th>
                            <td colspan="2">ময়মনসিংহ</td>
                        </tr>
                        <tr>
                            <th scope="row">Website :</th>
                            <td>www.mhs.edu.bd</td>
                        </tr>
                        <tr>
                            <th scope="row">শিক্ষার্থীর সংখ্যা :</th>
                            <td>863</td>
                        </tr>
                        <tr>
                            <th scope="row">মোট জমির পরিমান (একর) :	</th>
                            <td colspan="2">9.98</td>
                        </tr>
                        <tr>
                            <th scope="row">ভবন সংখ্যা :	</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">মোট শ্রেণিকক্ষ সংখ্যা :</th>
                            <td>28</td>
                        </tr>
                        <tr>
                            <th scope="row">মাল্টিমিডিয়া শ্রেণিকক্ষ সংখ্যা :</th>
                            <td colspan="2">2</td>
                        </tr>
                        <tr>
                            <th scope="row">আইসিটি ল্যাব সংখ্যা :</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">পাঠাগার এর জন্য কক্ষ সংখ্যা :</th>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IntroTable;