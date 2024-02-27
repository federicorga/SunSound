use mini_redis::{client, Result};

#[tokio::main]
async fn main() -> Result<()> {
    //Open a connection to the mini-redis address.
    let mut client = client::connect("127.0.0.1:6379").await?;

    //Set the key "hello" ehith the value "from SunSound!!"
    client.set("Hello", "from SunSound".into()).await?;

    //Get key "Hello"
    let result = client.get("Hello").await?;

    println!("Se obtuvo del servidor: {:?}", result);

    Ok(())
}

