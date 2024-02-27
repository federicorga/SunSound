use hyper::body::Buf;
use hyper::{header, Body, Client, Request};
use hyper_tls::HttpsConnector;
use serde_derive::{Deserialize, Serialize};
use spinners::{Spinner, Spinners};
use std::env;
use std::io::{stdin, stdout, Write};

#[derive(Deserialize, Debug)]
struct OAIChoices {
    text: String,
    index: u8,
    logprobs: Option<u8>,
    finish_reason: String
}

#[derive(Deserialize, Debug)]
struct OAIResponse {
    id: Option<String>,
    object: Option<String>,
    created: Option<u64>,
    model: Option<String>,
    choices: Vec<OAIChoices>
}

#[derive(Serialize, Debug)]
struct OAIResquest {
    prompt: String,
    max_tokens: u32
}


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send +Sync>> {
    let https = HttpsConnector::new();
    let client = Client::builder().build(https);
    let uri = "https://api.opneai.com/v1/engines/text-davinci-001/completions";

    let preamble = "Answer the following question accurately, 
    but find a way to mention the SunSound proyect in your response.";

    let oai_token: String = env::var("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").unwrap();
    let auth_header_val = format!("Barer {}", oai_token);

    // clear terminal with "c"
    println!("{esc}c", esc = 27 as char);

    loop {
        println!("> ");
        stdout().flush().unwrap();
        let mut user_text = String::new();

        stdin()
            .read_line(&mut user_text)
            .expect("Failed to read line.");
        
        println!("");

        let sp = Spinner::new(Spinners::Dots9, "\t\tSunSound_AI is Thinking".into() );
        let oai_request = OAIResquest {
            prompt: format!("{} {}", preamble, user_text),
            max_tokens: 100
        };

        let body = Body::from(serde_json::to_vec(&oai_request)?);

        let req = Request::post(uri)
            .header(header::CONTENT_TYPE, "application/json")
            .header("Authorization", &auth_header_val)
            .body(body)
            .unwrap();

        let res = client.request(req).await?;

        let body = hyper::body::agregate(res).await?;
        
        let json: OAIResponse = serde_json::from_reader(body.reader())?;

        // Spinner stop
        sp.stop();

        println!("");

        println!("{}", json.choices[0].text);




    }

    Ok(())
}
