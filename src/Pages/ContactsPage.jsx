import './ContactsPage.css'
import Button from '../Components/Button'
import TextCntBordered from '../Components/TextCntBordered'

export default function ContactsPage() {

    return (
        <div id='cts-body'>
            <div id='cts-header-cnt' data-aos='fade-down'>
                <h1>CONTACT ME</h1>
                <p>Reach out and say hello!</p>
            </div>
            <div id='cts-content-cnt'>
                <div id='cts-left-part' data-aos='fade-down'>
                    <TextCntBordered property='Full Name:' value='Stanislav Motsnyi' width='30vw' />
                    <br />
                    <TextCntBordered property='E-mail: ' value='stasstrong06@gmail.com' width='30vw'/>
                    <br />
                    <TextCntBordered property='Number: ' value='number' width='30vw'/>
                    <br />
                    <TextCntBordered property='Working Address: ' value='Ke Kamenci 151, 530 03, Pardubice I' width='30vw'/>
                </div>
                <div id='cts-right-part'  data-aos='fade-down'>
                    <h3>For business inquiries, please contact me via form below</h3>
                    <input className='cts-input' placeholder='Name' type="text" />
                    <input className='cts-input' placeholder='E-mail' type="text" />
                    <input className='cts-input' placeholder='Subject' type="text" />
                    <textarea className='cts-input' id='cts-input-message' placeholder='Your message' type="text" />
                    <Button height='8vh' width='15vw'>
                        <p style={{fontSize: '1.2rem'}}>Send</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}