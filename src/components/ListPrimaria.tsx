
interface ListPrimariaProps{
    ImageUrl: string
    Cantor: string
}

export function MaisTocadas({ImageUrl, Cantor}: ListPrimariaProps){
return(
        <div>
            {ImageUrl}
            {Cantor}
        </div>
)

}