using Microsoft.AspNetCore.Mvc;
using RakingApp.Models;

namespace RakingApp.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id=1,Title="JavaScript",ImageId=1,Ranking=0,ItemType=1},
            new ItemModel{Id=2,Title="Typescript",ImageId=2,Ranking=0,ItemType=1},
            new ItemModel{Id=3,Title="Python",ImageId=3,Ranking=0,ItemType=1},
            new ItemModel{Id=4,Title="PHP",ImageId=4,Ranking=0,ItemType=1},
            new ItemModel{Id=5,Title="C#",ImageId=5,Ranking=0,ItemType=1},
            new ItemModel{Id=6,Title="C",ImageId=6,Ranking=0,ItemType=1},
            new ItemModel{Id=7,Title="C++",ImageId=7,Ranking=0,ItemType=1},
            new ItemModel{Id=8,Title="Java",ImageId=8,Ranking=0,ItemType=1},
            new ItemModel{Id=9,Title="Assembly Language",ImageId=9,Ranking=0,ItemType=1},
            new ItemModel{Id=10,Title="Go",ImageId=10,Ranking=0,ItemType=1},
            new ItemModel{Id=11,Title="Ruby",ImageId=11,Ranking=0,ItemType=1},
            new ItemModel{Id=12,Title="React.js",ImageId=12,Ranking=0,ItemType=2},
            new ItemModel{Id=13,Title="Vue.js",ImageId=13,Ranking=0,ItemType=2},
            new ItemModel{Id=14,Title="Angular",ImageId=14,Ranking=0,ItemType=2},
            new ItemModel{Id=15,Title="ASP.NET",ImageId=15,Ranking=0,ItemType=2},
            new ItemModel{Id=16,Title="Laravel",ImageId=16,Ranking=0,ItemType=2},
            new ItemModel{Id=17,Title="Spring",ImageId=17,Ranking=0,ItemType=2},
            new ItemModel{Id=18,Title="Express",ImageId=18,Ranking=0,ItemType=2},
            new ItemModel{Id=19,Title="jQuery",ImageId=19,Ranking=0,ItemType=2},
            new ItemModel{Id=20,Title="Ruby on Rails",ImageId=20,Ranking=0,ItemType=2},
            new ItemModel{Id=21,Title="Django",ImageId=21,Ranking=0,ItemType=2},
            new ItemModel{Id=22,Title="Flask",ImageId=22,Ranking=0,ItemType=2},
            new ItemModel{Id=23,Title="Fast.API",ImageId=23,Ranking=0,ItemType=2},
            new ItemModel{Id=24,Title="Svelte",ImageId=24,Ranking=0,ItemType=2}
        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(item => item.ItemType == itemType).ToArray();
            System.Threading.Thread.Sleep(500);
            return items;
        }
    }
}