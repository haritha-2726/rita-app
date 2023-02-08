import { Field, Formik ,Form} from "formik"
const Login=()=>{
    return( 
        <div> 
            <h1>Signin</h1>
            <Formik 
                initialValues={{
                   FirstName:"",
                   LastName:"",
                   email:""
                }}
                onSubmit={async(values) => {
                console.log(values);
                }}
            >
                <Form>
                    <div> 
                    <label htmlFor="FirstName">FirstName:</label>  
                    <Field id="FirstName" name="FirstName" placeholder="Firstname"/>
                    </div>
                    <div> 
                    <label htmlFor="LastName"> LastName</label> 
                    <Field id="LastName" name="LastName" placeholder="Lastname"/>
                    </div>
                    <div> 
                    <label htmlFor="Emailid"> Emailid</label> 
                    <Field id="emailId" name="emailid" placeholder="EmailId" type="email"/>
                    </div>
                    <button type="submit">submit</button>
                </Form>
             </Formik>
                

        </div>
    )
 
}
export default Login