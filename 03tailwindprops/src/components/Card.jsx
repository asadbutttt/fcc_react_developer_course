import React from 'react'

function Card({ username = 'AUB' }) {
    // console.log(props)
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/1133742/pexels-photo-1133742.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, omnis.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div>
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card