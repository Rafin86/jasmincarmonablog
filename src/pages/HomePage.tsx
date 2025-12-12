import FadeInPage from "./FadeInPage"
const imgUrl = "https://media.istockphoto.com/id/1295250677/photo/modern-scandinavian-home-interior-with-design-wooden-commode-tropical-leaf-in-vase-books-and.jpg?s=612x612&w=is&k=20&c=IqRccXuGpbkXE3UluNbZ67ShQREKMhXw3PimwNkAKsM="
export default function HomePage() {
    return (
        <FadeInPage>
            <div className={`flex-col flex-wrap bg-[url(${imgUrl})] bg-cover bg-center min-h-screen p-2 pt-15`}>
                
                    <h1 className="text-3xl flex h-fit text-amber-950 font-bold">Hi! I'm Jasmin</h1>
                    <div className="w-60 h-55 rounded-full overflow-hidden border-2 m-5 ml-auto">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/56589577e4b02fbb0a38beaa/1637689021697-64TMER9JRXNYKGH1WNT5/_A7R3310+copy.jpg?format=300w"
                            alt="Description of image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                
                
                <p className="flex h-fit text-2xl rounded-2xl backdrop-blur-xs p-2 bg-amber-950/25 ">
                    Hey friends! <br></br>I believe there is something inside of all us that wants us to create. “Your words create the world you live in. What you speak is a dead giveaway of what is in your heart. If you want to change your world, start by changing your words. You can change the direction of your life by changing the declarations of your mouth. You are either creating or destroying. You were created in the image of a creative God, to create with your words.”
                </p>
            
            </div>
        </FadeInPage>
        
    )
}