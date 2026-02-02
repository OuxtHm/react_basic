export interface Recipe{
    no:number;
    hit :number;
    likecount :number;
    jjimcount :number;
    replycount :number;
    title :string;
    poster :string;
    chef :string;
    link :string;

}
export interface RecipeProps{
    list:Recipe[];
    totalpage:number;
    startPage:number;
    endPage:number;
}